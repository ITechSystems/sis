<?php

namespace App;

use App\Scopes\AgentScope;
use Illuminate\Database\Eloquent\Model;

class AidaMap extends Model
{
    protected $fillable = [
        'user_id',
        'unit_id',
        'buyer_id',
        'finance_type',
    ];

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new AgentScope);
    }

    public function buyer()
    {
        return $this->belongsTo(Buyer::class, 'buyer_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class, 'unit_id');
    }
}
