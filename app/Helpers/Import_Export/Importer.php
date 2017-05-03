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
			if($key == 0){
				continue;
			}

			if($line[0] == ''){
				continue;
			}

			//create Data
			\DB::transaction(function() use($line, $copied_loans){
				$data_obj = self::createData($line);

				//create Downpayment
				$downpayment = self::createDownpayment($line, $data_obj);

				$loan = self::createLoan($line, $data_obj, $copied_loans);
			});
		}
	}

	public static function createData($line){
		//search if this parent is active using block_lot
		$data_active = Unit::where('block_lot', $line[3])
			->where('status', 'active')
			->first();

		if(! $data_active){
			return self::createDataObject($line);
		}

		if($data_active->date == $line[0]){
			return $data_active;
		}

		//this $data_active must be archived
		$data_active->archive();

		return self::createDataObject($line);
	}

	public static function createDownpayment($line, $data_obj){
		//find Downpayment associated with $data_obj, if not exist create
		$downpayment_obj = DownPayment::where('data_id', $data_obj->id)->first();

		if(! $downpayment_obj){
			$downpayment0 = new DownPayment;
			$downpayment = $downpayment0->getInstance();
			$downpayment->data_id = $data_obj->id;
			$downpayment->equity = (float) str_replace(',', '', $line[10]);
			$downpayment->term = $line[11];
			$downpayment->monthly = (float) str_replace(',', '', $line[12]);
			$downpayment->percentage = $line[13];
			$downpayment->save();
		}
	}

	public static function createLoan($line, $data_obj, $copied_loans){
		//get latest archived if any
		$latest_archived = self::getLatestArchived($data_obj->block_lot);

		if($latest_archived){
			$archived_loan_id = self::doesNotExistInArchives($line, $latest_archived, $copied_loans);

			if($archived_loan_id){
				self::cloneArchivedLoan($data_obj, $archived_loan_id, $copied_loans);
			}
		}

		self::createLoanObject($data_obj->id, $line);
	}

	public static function createDataObject($line)
	{
		$data_obj0 = new Unit;
		$data_obj = $data_obj0->getInstance();
		$data_obj->date = $line[0];
		$data_obj->location = $line[1];
		$data_obj->project = $line[2];
		$data_obj->block_lot = $line[3];
		$data_obj->lot_area = $line[4];
		$data_obj->lot_type = $line[5];
		$data_obj->floor_area = $line[6];
		$data_obj->house_model = $line[7];
		$data_obj->total_contract_price = (float) str_replace(',', '', $line[8]);
		$data_obj->reservation_fee = (float) str_replace(',', '', $line[9]);
		$data_obj->status = 'active';
		$data_obj->save();

		return $data_obj;
	}

	public static function createLoanObject($data_id, $line)
	{
		$loan0 = new Loan;
		$loan = $loan0->getInstance();
		$loan->data_id = $data_id;
		$loan->total = (float) str_replace(',', '', $line[14]);
		$loan->mri = (float) str_replace(',', '', $line[15]);
		$loan->monthly_amortization = (float) str_replace(',', '', $line[16]);
		$loan->percentage = $line[17];
		$loan->description = $line[18];
		$loan->monthly_percentage = $line[19];
		$loan->years = $line[20];
		$loan->save();
	}

	public static function getLatestArchived($block_lot)
	{
		return Unit::archived()
		->where('block_lot', $block_lot)
		->orderBy('id', 'DESC')
		->first();
	}

	public static function doesNotExistInArchives($line, $latest_archived, &$copied_loans)
	{
		foreach($latest_archived->loans as $loan){
			if($copied_loans == null){
				return false;
			}

			if($copied_loans->contains($loan->id)){
				continue;
			}

			if($loan->description == $line[18]){
				continue;
			}

			return $loan->id;
		}

		return false;
	}

	public static function cloneArchivedLoan($data_obj, $archived_loan_id, &$copied_loans)
	{
		$archived_loan = Loan::find($archived_loan_id);

		$loan0 = new Loan;
		$loan = $loan0->getInstance();
		$loan->data_id = $data_obj->id;
		$loan->total = $archived_loan->total;
		$loan->mri = $archived_loan->mri;
		$loan->monthly_amortization = $archived_loan->monthly_amortization;
		$loan->percentage = $archived_loan->percentage;
		$loan->description = $archived_loan->description;
		$loan->monthly_percentage = $archived_loan->monthly_percentage;
		$loan->years = $archived_loan->years;
		$loan->save();

		$copied_loans->push($archived_loan_id);
	}
}
