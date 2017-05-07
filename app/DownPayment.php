<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DownPayment extends Model
{
    protected $table = 'downpayments';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'unit_id',
        'percentage',
        'total',
        'term',
        'amount',
    ];

    public static function getInstance()
    {
        return new static;
    }

    public static function createEasy($unit_obj, $line){
        $downpayment = self::getInstance();
        $downpayment->unit_id = $unit_obj->id;
        $downpayment->percentage = 5;
        $downpayment->equity = (float) str_replace(',', '', $line[13]);
        $downpayment->term = $line[14];
        $downpayment->monthly = (float) str_replace(',', '', $line[15]);
        
        return $downpayment->save();
    }

    public static function createLncBank2($unit_obj, $line){
        $downpayment = self::getInstance();
        $downpayment->unit_id = $unit_obj->id;
        $downpayment->percentage = 12.5;
        $downpayment->equity = (float) str_replace(',', '', $line[13]);
        $downpayment->term = $line[14];
        $downpayment->monthly = (float) str_replace(',', '', $line[15]);
        
        return $downpayment->save();
    }
}
