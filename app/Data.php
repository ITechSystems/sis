<?php

namespace App;

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
}
