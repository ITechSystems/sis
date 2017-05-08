<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CitiesController extends ApiController
{
    public function index()
    {
        return $this->respond([
            'cities' => config('buyer.cities'),
        ]);
    }
}
