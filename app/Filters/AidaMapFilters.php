<?php

namespace App\Filters;

class AidaMapFilters extends Filters
{
    public function id($value)
    {
        return $this->builder->where('id', $value);
    }

    public function unitId($value)
    {
        return $this->builder->whereHas('unit', function ($query) use ($value) {
            $query->where('block_lot', 'like', "%$value%");
        });
    }

    public function buyer($value)
    {
        return $this->builder->whereHas('buyer', function ($query) use ($value) {
            $query->where('first_name', 'like', "%$value%")
                ->orWhere('middle_name', 'like', "%$value%")
                ->orWhere('last_name', 'like', "%$value%")
                ->orWhere('extension', 'like', "%$value%");
        });
    }

    public function agent($value)
    {
        $this->builder->whereHas('agent', function ($query) use ($value) {
            $query->where('first_name', 'like', "%$value%")
                ->orWhere('middle_name', 'like', "%$value%")
                ->orWhere('last_name', 'like', "%$value%")
                ->orWhere('extension', 'like', "%$value%");
        });
    }

    public function financeType()
    {
        return $this->builder->where('finance_type', 'like', "%$value%");
    }

    public function createdAt($value)
    {
        return $this->builder->where('created_at', 'like', "%$value%");
    }
}
