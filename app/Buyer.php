<?php

namespace App;

use App\BuyerRequirement;
use App\Filters\Filterable;
use App\Scopes\AgentScope;
use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{
    use Filterable;

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

    public function requirements()
    {
        return BuyerRequirement::with('requirement')
            ->where('secondary_buyer', 0)
            ->where('finance_type', $this->financing_type)
            ->where('marital_status', $this->marital_status)
            ->where('work_type', $this->workLocation())->get();
    }

    public function workLocation()
    {
        if (strpos($this->work_type, 'Local') !== false || strpos($this->work_type, 'Self') !== false) {
            return 'Local';
        }

        return 'Overseas';
    }

    public function fullName()
    {
        return "{$this->last_name}, {$this->first_name} {$this->middle_name} {$this->extension}";
    }
}
