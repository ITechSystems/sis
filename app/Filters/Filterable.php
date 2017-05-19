<?php

namespace App\Filters;

trait Filterable
{
    public function scopeFilter($query, $filters)
    {
        return $filters->apply($query);
    }
}
