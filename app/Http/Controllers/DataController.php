<?php

namespace App\Http\Controllers;

use App\Unit;
use App\Helpers\Import_Export\CsvMapper;
use App\Helpers\Import_Export\Importer;
use App\Helpers\Import_Export\RecordsDownloader;

class DataController extends Controller
{
    public function index()
    {
        $this->authorize('index', Unit::class);

        return view('data.index');
    }

    public function import()
    {
        $this->authorize('import', Unit::class);

        $data = CsvMapper::map(file(request()->data));

        Importer::import($data);

        session()->flash('message', 'Successfully imported data.');

        return redirect()->back();
    }

    public function export()
    {
        $data = Unit::where('status', 'active')->with('downpayment', 'loans')->get();

        $reformatted_data = $this->reformatThis($data);

        $headers = $data[0]->getHeaders();

        RecordsDownloader::array_to_csv_to_download($reformatted_data, 'property_data', $headers);
    }

    public function reformatThis($data)
    {
        $combined = [];

        foreach($data as $key => $line){
            foreach($line->loans as $loan){
                $combined[] = [
                    'date' => $data[$key]->date,
                    'developer' => $data[$key]->developer,
                    'location' => $data[$key]->location,
                    'project' => $data[$key]->project,
                    'zone' => $data[$key]->zone,
                    'phase' => $data[$key]->phase,
                    'block_lot' => $data[$key]->block_lot,
                    'lot_area' => $data[$key]->lot_area,
                    'lot_type' => $data[$key]->lot_type,
                    'floor_area' => $data[$key]->floor_area,
                    'house_model' => $data[$key]->house_model,
                    'total_contract_price' => $data[$key]->total_contract_price,
                    'reservation_fee' => $data[$key]->reservation_fee,
                    'equity' => $data[$key]->downpayment->equity,
                    'term' => $data[$key]->downpayment->term,
                    'monthly' => $data[$key]->downpayment->monthly,
                    'percentage' => $data[$key]->downpayment->percentage,
                    'total' => $loan->total,
                    'mri' => $loan->mri,
                    'monthly_amortization' => $loan->monthly_amortization,
                    'loan_percentage' => $loan->percentage,
                    'description' => $loan->description,
                    'monthly_percentage' => $loan->monthly_percentage,
                    'years' => $loan->years,
                    'finance_type' => $loan->finance_type
                ];
            }
        }

        return $combined;
    }

    public function template()
    {
        $headers = (new Unit)->getHeaders();

        RecordsDownloader::array_to_csv_to_download([], 'property_template', $headers);
    }
}
