<?php

namespace App\Helpers\Handlers;

use App\DownPayment;
use App\Loan;
use App\Unit;

class RecordHandler{
	public static function createUnitEasy($line)
	{
		$unit_active = self::getUnitActive($line[6], $line[22]);

		if(! $unit_active){
			$unit_easy = Unit::createUnitObject($line);

			$dowpayment_easy = DownPayment::createEasy($unit_easy, $line);

			$loans = Loan::createLoansEasy($unit_easy->id, $line);

			return;
		}

		//this $unit_active must be archived
		$to_be_archived = Unit::find($unit_active->unit_id);
		
		$to_be_archived->archive();
		
		$unit_easy = Unit::createUnitObject($line);
		
		$dowpayment_easy = Downpayment::createEasy($unit_easy, $line);

		$loans = Loan::createLoansEasy($unit_easy->id, $line);
	}

	public static function createUnitLncBank2($line)
	{
		$unit_active = self::getUnitActive($line[6], $line[22]);

		if(! $unit_active){
			$unit_easy = Unit::createUnitObject($line);

			$dowpayment_easy = DownPayment::createEasy($unit_easy, $line);

			$loans = Loan::createLoansEasy($unit_easy->id, $line);

			return;
		}

		//this $unit_active must be archived
		$to_be_archived = Unit::find($unit_active->unit_id);
		
		$to_be_archived->archive();
		
		$unit_lncBank2 = Unit::createUnitObject($line);
		
		$dowpayment_easy = Downpayment::createLncBank2($unit_lncBank2, $line);

		$loans = Loan::createLoanLncBank2($unit_lncBank2->id, $line);
	}

	public static function createUnitInHouse2($line)
	{
		$unit_active = self::getUnitActive($line[6], $line[22]);

		if(! $unit_active){
			$unit_inHouse2 = Unit::createUnitObject($line);

			$dowpayment_inHouse2 = DownPayment::createEasy($unit_easy, $line);

			$loans = Loan::createLoansEasy($unit_easy->id, $line);

			return;
		}

		//this $unit_active must be archived
		$to_be_archived = Unit::find($unit_active->unit_id);
		
		$to_be_archived->archive();
		
		$unit_lncBank2 = Unit::createUnitObject($line);
		
		$dowpayment_inHouse2 = Downpayment::createLncBank2($unit_lncBank2, $line);

		$loans = Loan::createLoanLncBank2($unit_lncBank2->id, $line);
	}

	public static function getUnitActive($block_lot, $finance_type)
	{
		return Unit::active()
			->where('block_lot', $block_lot)
			->join('loans', 'units.id', '=', 'unit_id')
			->where('loans.finance_type', $finance_type)
			->first();
	}
}