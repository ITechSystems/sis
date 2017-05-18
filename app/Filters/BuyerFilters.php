<?php

namespace App\Filters;

class BuyerFilters extends Filters
{
    public function id($value)
    {
        return $this->builder->where('id', "$value");
    }

    public function lastName($value)
    {
        return $this->builder->where('last_name', 'like', "%$value%");
    }

    public function firstName($value)
    {
        return $this->builder->where('first_name', 'like', "%$value%");
    }
}
