<?php

namespace App\Helpers\Import_Export;

use App\DownPayment;
use App\Helpers\Handlers\RecordHandler;
use App\Loan;
use App\Unit;
use Illuminate\Support\Collection;

class Importer{
	public static function import($data)
	{
		foreach($data as $key => $line){
			if($key < 2){
				continue;
			}

			if($line[0] == ''){
				continue;
			}

			\DB::transaction(function() use($line){
				//create Data
				$data_obj = self::createData($line);
			});
		}
	}

	public static function createData($line){
		$finance_type = self::getFinanceType($line);

		if(trim($finance_type) == 'EASY 5 UNITS' || trim($finance_type) == 'EASY 5%'){
			RecordHandler::createUnitEasy($line);
		}

		if(trim($finance_type) == 'BANK2 12.5% DP'){
			RecordHandler::createUnitLncBank2($line);
		}

		if(trim($finance_type) == 'IN-HOUSE 2'){
			RecordHandler::createUnitInHouse2($line);
		}

		if(trim($finance_type) == 'MOVE IN-12 @ 12% INTERIM RATE'){
			RecordHandler::createUnitMoveIn12($line);
		}

		if(trim($finance_type) == 'MOVE-IN AFTER 6'){
			RecordHandler::createMoveInAfter6($line);
		}

		if(trim($finance_type) == 'ZONE 2 10% EQUITY TERM'){
			RecordHandler::createZone2EquityTerm($line);
		}

		if(trim($finance_type) == 'ZONE 2 - BANK2 12.5% DP'){
			RecordHandler::createZone2Bank2($line);
		}

		if(trim($finance_type) == 'ZONE 2 - INHOUSE2'){
			RecordHandler::createZone2Inhouse2($line);
		}
	}

	// public static function createDownpayment($line, $data_obj){
	// 	//find Downpayment associated with $data_obj, if not exist create
	// 	$downpayment_obj = DownPayment::where('unit_id', $data_obj->id)->first();

	// 	if(! $downpayment_obj){
	// 		$downpayment0 = new DownPayment;
	// 		$downpayment = $downpayment0->getInstance();
	// 		$downpayment->unit_id = $data_obj->id;
	// 		$downpayment->percentage = self::getDownpaymentPercentage($line);
	// 		$downpayment->equity = (float) str_replace(',', '', $line[16]);
	// 		$downpayment->term = $line[17];
	// 		$downpayment->monthly = (float) str_replace(',', '', $line[18]);
			
	// 		$downpayment->save();
	// 	}
	// }

	// public static function createLoan($line, $data_obj){
	// 	// if($line[20] != '')
	// 	// 	self::createLoanLnc($data_obj->id, $line, 22, 20);

	// 	// if($line[21] != '')
	// 	// 	self::createLoanLnc($data_obj->id, $line, 22, 20);

	// 	if($line[22] != '')
	// 		self::createLoanLnc($data_obj->id, $line, 22, 20);

	// 	if($line[23] != '')
	// 		self::createLoanLnc($data_obj->id, $line, 23, 15);

	// 	if($line[24] != '')
	// 		self::createLoanLnc($data_obj->id, $line, 24, 10);

	// 	if($line[25] != '')
	// 		self::createLoanLnc($data_obj->id, $line, 25, 5);




	// 	if($line[26] != '')
	// 		self::createLoanZone($data_obj->id, $line, 26, 10, 21);

	// 	if($line[27] != '')
	// 		self::createLoanZone($data_obj->id, $line, 27, 5, 18);
	// }

	// public static function createDataObject($line)
	// {
	// 	$data_obj0 = new Unit;
	// 	$data_obj = $data_obj0->getInstance();
	// 	$data_obj->date = $line[0];
	// 	$data_obj->developer = $line[1];
	// 	$data_obj->location = $line[2];
	// 	$data_obj->project = $line[3];
	// 	$data_obj->zone = $line[4];
	// 	$data_obj->phase = $line[5];
	// 	$data_obj->block_lot = $line[6];
	// 	$data_obj->lot_area = (float) str_replace(',', '', $line[7]);
	// 	$data_obj->lot_type = $line[8];
	// 	$data_obj->floor_area = (float) str_replace(',', '', $line[9]);
	// 	$data_obj->house_model = $line[10];
	// 	$data_obj->total_contract_price = (float) str_replace(',', '', $line[11]);
	// 	$data_obj->reservation_fee = (float) str_replace(',', '', $line[12]);
	// 	$data_obj->status = 'active';
	// 	$data_obj->save();

	// 	return $data_obj;
	// }

	// public static function getDownpaymentPercentage($line)
	// {
	// 	if($line[13] != ''){
	// 		return 20;
	// 	}

	// 	if($line[14] != ''){
	// 		return 12.5;
	// 	}

	// 	return 5;
	// }

	// public static function createLoanLnc($data_id, $line, $index, $years)
	// {
	// 	$loan0 = new Loan;
	// 	$loan = $loan0->getInstance();
	// 	$loan->unit_id = $data_id;
	// 	$loan->percentage = 87.5;
	// 	$loan->total = (float) str_replace(',', '', $line[20]);
	// 	$loan->mri = (float) str_replace(',', '', $line[21]);
	// 	$loan->monthly_amortization = (float) str_replace(',', '', $line[$index]);
		
	// 	$loan->description = 'MONTHLY AMORTIZATION 7.75% INTEREST + INSURANCES';
	// 	$loan->monthly_percentage = '7.75%';
	// 	$loan->years = $years;
	// 	$loan->finance_type = $line[22];
	// 	$loan->save();
	// }

	// public static function createLoanZone($data_id, $line, $index, $years, $percentage = '')
	// {
	// 	$loan0 = new Loan;
	// 	$loan = $loan0->getInstance();
	// 	$loan->unit_id = $data_id;
	// 	$loan->percentage = self::getFinaNcetype($line);
	// 	$loan->total = (float) str_replace(',', '', $line[18]);
	// 	$loan->mri = (float) str_replace(',', '', $line[19]);
	// 	$loan->monthly_amortization = (float) str_replace(',', '', $line[$index]);
		
	// 	$loan->description = 'MONTHLY AMORTIZATION = INTEREST + INSURANCES';
	// 	$loan->monthly_percentage = $percentage;
	// 	$loan->years = $years;
	// 	$loan->finance_type = $line[28];
	// 	$loan->save();
	// }

	public static function getFinanceType($line)
	{
		return $line[22];
	}

	
}
