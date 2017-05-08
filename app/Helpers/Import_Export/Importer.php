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
		//determine what indices the 'total' are
		$total_indices = [];

		foreach($data as $key => $line){
			if($key == 0){
				$total_indices = self::getIndicesOfTotal($line);
			}

			if($key < 1){
				continue;
			}

			if($line[0] == ''){
				continue;
			}

			\DB::transaction(function() use($line, $total_indices){
				//create Data
				$data_obj = self::createData($line);
			
				$downpayment = DownPayment::createEasy($data_obj, $line);

				//create loan
				foreach($line as $key1 => $l){
					foreach($total_indices as $index){
						if($key1 == $index){
							$loan0 = new Loan;
					        $loan = $loan0->getInstance();
					        $loan->unit_id = $data_obj->id;
					        $loan->total = (float) str_replace(',', '', $line[$index]);
					        $loan->mri = (float) str_replace(',', '', $line[$index + 1]);
					        $loan->monthly_amortization = (float) str_replace(',', '', $line[$index + 2]);
					        $loan->percentage = (float) str_replace(',', '', $line[$index + 3]);
					        $loan->description = $line[$index + 4];
					        $loan->monthly_percentage = (float) str_replace(',', '', $line[$index + 5]);;
					        $loan->years = (float) str_replace(',', '', $line[$index + 6]);;
					        $loan->finance_type = $line[19];
					        $loan->save();
						}
					}
				}

			});
		}
	}

	public static function createData($line){
		$finance_type = self::getFinanceType($line);

		return RecordHandler::createUnitEasy($line);
	}

	public static function getFinanceType($line)
	{
		return $line[19];
	}

	public static function getIndicesOfTotal($headers)
	{
		$indices = [];

		foreach ($headers as $key => $value) {
			if($value == 'total'){
				$indices[] = $key;
			}
		}

		return $indices;
	}
}
