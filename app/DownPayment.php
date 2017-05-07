<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DownPayment extends Model
{
    protected $table = 'downpayments';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'data_id',
        'percentage',
        'total',
        'term',
        'amount',
    ];

    public function getInstance()
    {
        return new static;
    }
}
