<?php

namespace App;

use App\Scopes\AgentScope;
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

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new AgentScope);
    }

    public function agent()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function status()
    {
        return $this->belongsTo(BuyerStatus::class, 'status');
    }

    public function fullName()
    {
        return "{$this->last_name}, {$this->first_name} {$this->middle_name} {$this->extension}";
    }

    public function scopeFilter($query, $filters)
    {
        return $filters->apply($query);
    }
}
