<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $table = 'units';

    protected $primaryKey = 'id';

    public $timestamps = false;

    protected $fillable = [
        'date',
        'developer',
        'location',
        'project',
        'zone',
        'phase',
        'block_lot',
        'lot_area',
        'lot_type',
        'floor_area',
        'house_model',
        'total_contract_price',
        'reservation_fee',
        'status'
    ];

    public function getInstance()
    {
        return new static;
    }

    public function downpayment()
    {
        return $this->hasOne(DownPayment::class, 'data_id');
    }

    public function loans()
    {
        return $this->hasMany(Loan::class, 'data_id');
    }

    public function getHeaders()
    {
        return [
            'date',
            'developer',
            'location',
            'project',
            'zone',
            'phase',
            'block_lot',
            'lot_area',
            'lot_type',
            'floor_area',
            'house_model',
            'total_contract_price',
            'reservation_fee',
            'equity',
            'term',
            'downpayment_monthly',
            'downpayment_percentage',
            'loan_total',
            'mri',
            'monthly_amortization',
            'loan_percentage',
            'description',
            'monthly_percentage',
            'years',
        ];
    }

    public function archive()
    {
        $this->status = $this->getArchiveStatus();

        $this->save();
    }

    public function getActiveStatus()
    {
        return 'active';
    }

    public function getArchiveStatus()
    {
        return 'archived';
    }

    public function scopeActive($query)
    {
        return $query->where('status', $this->getActiveStatus());
    }

    public function scopeArchived($query)
    {
        return $query->where('status', $this->getArchiveStatus());
    }
}
