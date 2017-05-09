<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AidaMap extends Model
{
    protected $fillable = [
        'user_id',
        'unit_id',
        'buyer_id',
        'finance_type',
    ];

    public function buyer()
    {
        return $this->belongsTo(Buyer::class, 'buyer_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
