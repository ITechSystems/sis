<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CountriesController extends ApiController
{
    public function index()
    {
        return $this->respond([
            'countries' => config('buyer.countries'),
        ]);
    }
}
