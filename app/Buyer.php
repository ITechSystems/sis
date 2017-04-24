<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{
    protected $fillable = [
        'name',
        'contact_number',
        'marital_status',
        'email',
        'work_location',
        'facebook_url',
        'financing_type',
        'country',
        'equity_type',
        'status',
    ];
}
