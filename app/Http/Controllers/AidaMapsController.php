<?php

namespace App\Http\Controllers;

use App\Data;

class AidaMapsController extends Controller
{
    public function index()
    {
        $locations = Data::where('status', 'active')->distinct()->get(['location']);

        return view('aida-maps.index', compact('locations'));
    }
}
