<?php

namespace App\Http\Controllers;

use App\Unit;

class UnitLocationsController extends ApiController
{
    public function index()
    {
        return $this->respond([
            'units' => Unit::active()->distinct()->get(['location']),
        ]);
    }
}
