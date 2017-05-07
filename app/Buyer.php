<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{
    protected $fillable = [
        'user_id',
        'first_name',
        'middle_name',
        'last_name',
        'extension',
        'contact_number',
        'marital_status',
        'email',
        'work_location',
        'facebook_url',
        'financing_type',
        'country',
        'equity_type',
        'birth_date',
        'status',
    ];

    public function agent()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
