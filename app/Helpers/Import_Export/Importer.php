<?php

namespace App\Helpers\Import_Export;

use App\Data;
use App\Downpayment;
use App\Loan;

class Importer{
	public static function import($data)
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