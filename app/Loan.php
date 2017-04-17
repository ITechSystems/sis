<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $table = 'loans';

    protected $fillable = [
    	'data_id',
    	'one',
    	'two',
    	'three',
    	'four',
    	'five',
    	'six'
    ];

    public $timestamps = false;

    public function getInstance(){
    	return new static;
    }
}
