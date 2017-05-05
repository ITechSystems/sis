<?php

namespace App\Helpers\Import_Export;

use App\Unit;
use App\DownPayment;
use App\Loan;
use Illuminate\Support\Collection;

class Importer{
	public static function import($data)
	{
		$copied_loans = new Collection;

		foreach($data as $key => $line){
			if($key < 2){
				continue;
			}

			if($line[0] == ''){
				continue;
			}

			\DB::transaction(function() use($line, $copied_loans){
				//create Data
				$data_obj = self::createData($line);

				//create Downpayment
				$downpayment = self::createDownpayment($line, $data_obj);

				$loan = self::createLoan($line, $data_obj, $copied_loans);
			});
		}
	}

	public static function createData($line){
		$percentage_data = self::getLoanPercentage($line);

		//search if this parent is active using block_lot
		$data_active = Unit::where('block_lot', $line[6])
			->where('status', 'active')
			->join('loans', 'units.id', '=', 'unit_id')
			->where('loans.percentage', $percentage_data)
			->first();

		if(! $data_active){
			return self::createDataObject($line);
		}

		//this $data_active must be archived
		$to_be_archived = Unit::find($data_active->unit_id);
		
		$to_be_archived->archive();

		return self::createDataObject($line);
	}

	public static function createDownpayment($line, $data_obj){
		//find Downpayment associated with $data_obj, if not exist create
		$downpayment_obj = DownPayment::where('unit_id', $data_obj->id)->first();

		if(! $downpayment_obj){
			$downpayment0 = new DownPayment;
			$downpayment = $downpayment0->getInstance();
			$downpayment->unit_id = $data_obj->id;
			$downpayment->percentage = self::getDownpaymentPercentage($line);
			$downpayment->equity = (float) str_replace(',', '', $line[15]);
			$downpayment->term = $line[16];
			$downpayment->monthly = (float) str_replace(',', '', $line[17]);
			
			$downpayment->save();
		}
	}

	public static function createLoan($line, $data_obj, $copied_loans){
		if($line[22] != '')
			self::createLoan87($data_obj->id, $line, 22, 20);

		if($line[23] != '')
			self::createLoan87($data_obj->id, $line, 23, 15);

		if($line[24] != '')
			self::createLoan87($data_obj->id, $line, 24, 10);

		if($line[25] != '')
			self::createLoan87($data_obj->id, $line, 25, 5);

		if($line[26] != '')
			self::createLoan80($data_obj->id, $line, 26, 10, 21);

		if($line[27] != '')
			self::createLoan80($data_obj->id, $line, 27, 5, 18);
	}

	public static function createDataObject($line)
	{
		$data_obj0 = new Unit;
		$data_obj = $data_obj0->getInstance();
		$data_obj->date = $line[0];
		$data_obj->developer = $line[1];
		$data_obj->location = $line[2];
		$data_obj->project = $line[3];
		$data_obj->zone = $line[4];
		$data_obj->phase = $line[5];
		$data_obj->block_lot = $line[6];
		$data_obj->lot_area = (float) str_replace(',', '', $line[7]);
		$data_obj->lot_type = $line[8];
		$data_obj->floor_area = (float) str_replace(',', '', $line[9]);
		$data_obj->house_model = $line[10];
		$data_obj->total_contract_price = (float) str_replace(',', '', $line[11]);
		$data_obj->reservation_fee = (float) str_replace(',', '', $line[12]);
		$data_obj->status = 'active';
		$data_obj->save();

		return $data_obj;
	}

	public static function getDownpaymentPercentage($line)
	{
		if($line[13] != ''){
			return 20;
		}

		return 12.5;
	}

	public static function createLoan87($data_id, $line, $index, $years)
	{
		$loan0 = new Loan;
		$loan = $loan0->getInstance();
		$loan->unit_id = $data_id;
		$loan->percentage = self::getLoanPercentage($line);
		$loan->total = (float) str_replace(',', '', $line[18]);
		$loan->mri = (float) str_replace(',', '', $line[19]);
		$loan->monthly_amortization = (float) str_replace(',', '', $line[$index]);
		
		$loan->description = 'MONTHLY AMORTIZATION 7.75% INTEREST + INSURANCES';
		$loan->monthly_percentage = '7.75%';
		$loan->years = $years;
		$loan->save();
	}

	public static function createLoan80($data_id, $line, $index, $years, $percentage = '')
	{
		$loan0 = new Loan;
		$loan = $loan0->getInstance();
		$loan->unit_id = $data_id;
		$loan->percentage = self::getLoanPercentage($line);
		$loan->total = (float) str_replace(',', '', $line[18]);
		$loan->mri = (float) str_replace(',', '', $line[19]);
		$loan->monthly_amortization = (float) str_replace(',', '', $line[$index]);
		
		$loan->description = 'MONTHLY AMORTIZATION = INTEREST + INSURANCES';
		$loan->monthly_percentage = $percentage;
		$loan->years = $years;
		$loan->save();
	}

	public static function getLoanPercentage($line)
	{
		if($line[20] != ''){
			return 80;
		}

		return 87.5;
	}

	
}
