<?php

namespace App\Http\Controllers;

use App\Unit;

class AidaMapsController extends Controller
{
    public function index()
    {
        $locations = Unit::where('status', 'active')->distinct()->get(['location']);

        return view('aida-maps.index', compact('locations'));
    }
}
