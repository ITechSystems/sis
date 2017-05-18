<?php

namespace App\Filters;

trait Sortable
{
    public function orderBy($column, $direction)
    {
        return $this->builder->orderBy($column, $direction);
    }
}
