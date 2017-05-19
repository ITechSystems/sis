<?php

namespace App\Filters;

class UserFilters extends Filters
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
}
