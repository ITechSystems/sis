<?php

namespace App\Http\Controllers;

use App\Data;

class UnitLocationsController extends ApiController
{
    public function index()
    {
        return $this->respond([
            'units' => Data::active()->distinct()->get(['location']),
        ]);
    }
}
