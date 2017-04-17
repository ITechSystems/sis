<?php

namespace App\Helpers\Import_Export;

use App\Data;
use App\Downpayment;
use App\Loan;

class Importer{

	public static function import($data)
	{
		foreach($data as $key => $line){
			if($key == 0){
				continue;
			}

			if($line[0] == ''){
				continue;
			}

			//create Data
			\DB::transaction(function() use($line){
				$data_obj = self::createData($line);

				//create Downpayment
				$downpayment = self::createDownpayment($line, $data_obj);

				$loan = self::createLoan($line, $data_obj);
			});
		}	
	}

	public static function createData($line){
		//search if this parent is active using block_lot
		$data_active = Data::where('block_lot', $line[3])
			->where('status', 'active')
			->first();

		if(! $data_active){
			$data_obj0 = new Data;
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

		return $data_active;
		
	}

	public static function createDownpayment($line, $data_obj){
		//find Downpayment associated with $data_obj, if not exist create
		$downpayment_obj = Downpayment::where('data_id', $data_obj->id)->first();

		if(! $downpayment_obj){
			$downpayment0 = new Downpayment;
			$downpayment = $downpayment0->getInstance();	
			$downpayment->data_id = $data_obj->id;
			$downpayment->equity = (float) str_replace(',', '', $line[10]);//dd($downpayment->equity);
			$downpayment->term = $line[11];
			$downpayment->monthly = (float) str_replace(',', '', $line[12]);
			$downpayment->percentage = $line[13];
			$downpayment->save();
		}
	}

	public static function createLoan($line, $data_obj){
		$loan0 = new Loan;
		$loan = $loan0->getInstance();
		$loan->data_id = $data_obj->id;
		$loan->total = (float) str_replace(',', '', $line[14]);
		$loan->mri = (float) str_replace(',', '', $line[15]);
		$loan->monthly_amortization = (float) str_replace(',', '', $line[16]);
		$loan->percentage = $line[17];
		$loan->description = $line[18];
		$loan->monthly_percentage = $line[19];
		$loan->years = $line[20];
		$loan->save();
	}

	public static function importOK($data)
	{
		$title = '';
		$block = '';
		$location = '';

		foreach($data as $key => $line){
			if($key < 4){
				continue;
			}
			
			foreach($line as $key1 => $item){
				//get title
				if($key == 4 && $item != ''){
					$title = $item;
					break;
				}

				//get location
				if($key == 8 && $item != ''){
					$location = $item;
					break;
				}

				//get first block
				if($key == 9 && $item != ''){
					$block = $item;
					break;
				}
				
			}
			
			if($key > 9){
				if($line[1] == ''){
					$block = $line[0];
					continue;
				}
				
				\DB::transaction(function() use($line, $block, $title, $location){
					$data_obj0 = new Data;
					$data_obj = $data_obj0->getInstance();
					$data_obj->title = $title;
					$data_obj->location = $location;
					$data_obj->block = $block;
					$data_obj->number = $line[0];
					$data_obj->block_lot = $line[1];
					$data_obj->lot_area = $line[2];
					$data_obj->lot_type = $line[3];
					$data_obj->floor_area = $line[4];
					$data_obj->house_model = $line[5];
					$data_obj->total_contract_price = $line[6];
					$data_obj->reservation_fee = $line[7];
					$data_obj->save();

					$downpayment0 = new Downpayment;
					$downpayment = $downpayment0->getInstance();
					$downpayment->data_id = $data_obj->id;
					$downpayment->percentage = '10%';
					$downpayment->total = $line[8];
					$downpayment->term = $line[9];
					$downpayment->amount = $line[10];
					$downpayment->save();

					$loan0 = new Loan;
					$loan = $loan0->getInstance();
					$loan->data_id = $data_obj->id;
					$loan->one = $line[11];
					$loan->two = $line[12];
					$loan->three = $line[13];
					$loan->four = $line[14];
					$loan->five = $line[15];
					$loan->six = $line[16];
					$loan->save();
				});
			}
		}
	}
}