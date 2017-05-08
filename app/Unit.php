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
        return $this->hasOne(DownPayment::class, 'unit_id');
    }

    public function loans()
    {
        return $this->hasMany(Loan::class, 'unit_id');
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
            'finance_type'
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

    public static function createUnitObject($line)
    {
        $unit_obj0 = new Unit;
        $unit_obj = $unit_obj0->getInstance();
        $unit_obj->date = $line[0];
        $unit_obj->developer = $line[1];
        $unit_obj->location = $line[2];
        $unit_obj->project = $line[3];
        $unit_obj->zone = $line[4];
        $unit_obj->phase = $line[5];
        $unit_obj->block_lot = $line[6];
        $unit_obj->lot_area = (float) str_replace(',', '', $line[7]);
        $unit_obj->lot_type = $line[8];
        $unit_obj->floor_area = (float) str_replace(',', '', $line[9]);
        $unit_obj->house_model = $line[10];
        $unit_obj->total_contract_price = (float) str_replace(',', '', $line[11]);
        $unit_obj->reservation_fee = (float) str_replace(',', '', $line[12]);
        $unit_obj->status = 'active';
        $unit_obj->save();

        return $unit_obj;
    }
}
