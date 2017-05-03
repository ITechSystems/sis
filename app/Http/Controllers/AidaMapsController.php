<?php

namespace App\Http\Controllers;

use App\AidaMap;
use Barryvdh\DomPDF\PDF;

class AidaMapsController extends ApiController
{
    public function index()
    {
        return view('aida-maps.index');
    }

    public function show($unitId)
    {
        $aidaMap = AidaMap::where('unit_id', $unitId)->first();

        if (! $aidaMap) {
            return $this->respondNotFound('No Aida Map for this unit was found!');
        }

        return $this->respond([
            'aida_map' => $aidaMap,
        ]);
    }

    public function pdf(PDF $pdf)
    {
        $data = json_decode(request('serialized_data'));

        $pdf->loadView('aida-maps.pdf', compact('data'));

        return $pdf->download('aida-maps.pdf');
    }

    public function store()
    {
        return $this->respond([
            'aida_map' => AidaMap::create(request()->all() + ['user_id' => auth()->user()->id]),
            'message' => 'Successfully added an aida map',
        ]);
    }
}
