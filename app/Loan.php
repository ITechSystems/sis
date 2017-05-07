<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $table = 'loans';

    protected $fillable = [
        'unit_id',
        'total',
        'mri',
        'monthly_amortization',
        'percentage',
        'description',
        'monthly_percentage',
        'years',
    ];

    public $timestamps = false;

    public function getInstance()
    {
        return new static;
    }

    public static function createLoansEasy($unit_id, $line)
    {
        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 5;
        $loan->total = (float) str_replace(',', '', $line[16]);
        $loan->mri = (float) str_replace(',', '', $line[17]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[18]);
        $loan->description = 'Interim-MA 14%/7 mos';
        $loan->monthly_percentage = '14';
        $loan->years = 0.58;
        $loan->finance_type = $line[22];
        $loan->save();

        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 90;
        $loan->total = (float) str_replace(',', '', $line[19]);
        $loan->mri = (float) str_replace(',', '', $line[20]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[21]);
        $loan->description = 'Bank-MA 8%/20 yrs';
        $loan->monthly_percentage = 8;
        $loan->years = 20;
        $loan->finance_type = $line[22];
        $loan->save();
    }

    public static function createLoanLncBank2($unit_id, $line)
    {
        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 87.5;
        $loan->total = (float) str_replace(',', '', $line[16]);
        $loan->mri = (float) str_replace(',', '', $line[17]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[18]);
        $loan->description = 'MONTHLY AMORTIZATION 7.75% INTEREST + INSURANCES';
        $loan->monthly_percentage = 7.75;
        $loan->years = 20;
        $loan->finance_type = $line[22];
        $loan->save();

        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 87.5;
        $loan->total = (float) str_replace(',', '', $line[16]);
        $loan->mri = (float) str_replace(',', '', $line[17]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[19]);
        $loan->description = 'MONTHLY AMORTIZATION 7.75% INTEREST + INSURANCES';
        $loan->monthly_percentage = 7.75;
        $loan->years = 15;
        $loan->finance_type = $line[22];
        $loan->save();

        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 87.5;
        $loan->total = (float) str_replace(',', '', $line[16]);
        $loan->mri = (float) str_replace(',', '', $line[17]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[20]);
        $loan->description = 'MONTHLY AMORTIZATION 7.75% INTEREST + INSURANCES';
        $loan->monthly_percentage = 7.75;
        $loan->years = 10;
        $loan->finance_type = $line[22];
        $loan->save();

        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 87.5;
        $loan->total = (float) str_replace(',', '', $line[16]);
        $loan->mri = (float) str_replace(',', '', $line[17]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[21]);
        $loan->description = 'MONTHLY AMORTIZATION 7.75% INTEREST + INSURANCES';
        $loan->monthly_percentage = 7.75;
        $loan->years = 5;
        $loan->finance_type = $line[22];
        $loan->save();
    }

    public static function createLoansInHouse2($unit_id, $line)
    {
        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 80;
        $loan->total = (float) str_replace(',', '', $line[16]);
        $loan->mri = (float) str_replace(',', '', $line[17]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[18]);
        $loan->description = 'Monthly Amortization';
        $loan->monthly_percentage = '21';
        $loan->years = 10;
        $loan->finance_type = $line[22];
        $loan->save();

        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 80;
        $loan->total = (float) str_replace(',', '', $line[16]);
        $loan->mri = (float) str_replace(',', '', $line[17]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[19]);
        $loan->description = 'Monthly Amortization';
        $loan->monthly_percentage = '18';
        $loan->years = 5;
        $loan->finance_type = $line[22];
        $loan->save();
    }

    public static function createLoansMoveIn12($unit_id, $line)
    {
        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 7;
        $loan->total = (float) str_replace(',', '', $line[16]);
        $loan->mri = (float) str_replace(',', '', $line[17]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[18]);
        $loan->description = 'Interim-MA w/ Int + Insurance 12% @ 9 mos.';
        $loan->monthly_percentage = '12';
        $loan->years = 0.75;
        $loan->finance_type = $line[22];
        $loan->save();

        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 87.5;
        $loan->total = (float) str_replace(',', '', $line[19]);
        $loan->mri = (float) str_replace(',', '', $line[20]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[21]);
        $loan->description = 'Bank-MA w/ Int + Insurance 7.75% @ 20yrs';
        $loan->monthly_percentage = '7.75';
        $loan->years = 20;
        $loan->finance_type = $line[22];
        $loan->save();
    }

    public static function createLoansMoveInAfter6($unit_id, $line)
    {
        $loan0 = new Loan;
        $loan = $loan0->getInstance();
        $loan->unit_id = $unit_id;
        $loan->percentage = 94.5;
        $loan->total = (float) str_replace(',', '', $line[16]);
        $loan->mri = (float) str_replace(',', '', $line[17]);
        $loan->monthly_amortization = (float) str_replace(',', '', $line[18]);
        $loan->description = 'Bank-MA 7.75%/20yrs';
        $loan->monthly_percentage = '7.75';
        $loan->years = 20;
        $loan->finance_type = $line[22];
        $loan->save();
    }
}
