<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    protected $table = 'loans';

    protected $fillable = [
        'data_id',
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
}
