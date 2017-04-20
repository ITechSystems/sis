<?php

namespace App;

use App\Downpayment;
use App\Loan;
use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    protected $table = 'data';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
    	'title',
    	'location',
    	'block',
    	'number',
    	'block_lot',
    	'lot_area',
    	'lot_type',
    	'floor_area',
    	'house_model',
    	'total_contract_price',
    	'reservation_fee'
    ];

    public function getInstance(){
    	return new static;
    }	

    public function downpayment(){
        return $this->hasOne(Downpayment::class);
    }	

    public function loans()
    {
        return $this->hasMany(Loan::class);    
    }

    public function getHeaders()
    {
        return 
        [
            'date',
            'location',
            'project',
            'block_lot',
            'lot_area',
            'lot_type',
            'floor_area',
            'house_model',
            'total_contract_price',
            'reservation_fee',
            'equity',
            'term',
            'downpayment_monthly',
            'downpayment_percentage',
            'loan_total',
            'mri',
            'monthly_amortization',
            'loan_percentage',
            'description',
            'monthly_percentage',
            'years'
        ];
    }
}
