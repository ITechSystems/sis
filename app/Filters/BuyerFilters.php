<?php

namespace App\Filters;

class BuyerFilters extends Filters
{
    public function id($value)
    {
        return $this->builder->where('id', $value);
    }

    public function lastName($value)
    {
        return $this->builder->where('last_name', 'like', "%$value%");
    }

    public function firstName($value)
    {
        return $this->builder->where('first_name', 'like', "%$value%");
    }

    public function middleName($value)
    {
        return $this->builder->where('middle_name', 'like', "%$value%");
    }

    public function extension($value)
    {
        return $this->builder->where('extension', 'like', "%$value%");
    }

    public function mobile($value)
    {
        return $this->builder->where('mobile', 'like', "%$value%");
    }

    public function email($value)
    {
        return $this->builder->where('email', $value);
    }

    public function country($value)
    {
        return $this->builder->where('country', 'like', "%$value%");
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

    public function createdAt($value)
    {
        return $this->builder->where('created_at', 'like', "%$value%");
    }
}
