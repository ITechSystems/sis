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
        'mobile',
        'landline',
        'others',
        'marital_status',
        'email',
        'work_type',
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

    public function status()
    {
        return $this->belongsTo(BuyerStatus::class, 'status');
    }
}
