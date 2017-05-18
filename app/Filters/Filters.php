<?php

namespace App\Filters;

use App\Filters\Sortable;
use Illuminate\Http\Request;

abstract class Filters
{
    use Sortable;

    protected $request;

    protected $builder;

    protected $nonFilters = [
        '__construct',
        'apply',
        'getFilters',
        'slugify',
        'applySorting',
        'orderBy'
    ];

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function apply($builder)
    {
        $this->builder = $builder;

        foreach ($this->getFilters() as $filter => $value) {
            $filter = camel_case($filter);
            if (method_exists($this, $filter)) {
                $this->$filter($value);
            }
        }

        $this->applySorting();

        return $this->builder;
    }

    public function applySorting()
    {
        if ($this->request->has('sort_by')) {
            $direction = $this->request->has('direction') ? $this->request->direction : 'desc';

            return $this->orderBy($this->request->sort_by, $direction);
        }

        return $this->builder;
    }

    public function getFilters()
    {
        $filters = get_class_methods($this);

        foreach ($filters as $index => $method) {
            if (in_array($method, $this->nonFilters)) {
                unset($filters[$index]);
            }
        }

        return $this->request->intersect($this->slugify($filters));
    }

    public function slugify($filters)
    {
        return array_values(array_map(function ($filter) {
            $filter = preg_replace('/(?<=\\w)(?=[A-Z])/', "_$1", $filter);

            return strtolower($filter);
        }, $filters));
    }
}
