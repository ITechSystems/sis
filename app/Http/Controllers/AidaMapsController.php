<?php

namespace App\Http\Controllers;

use App\AidaMap;

class AidaMapsController extends ApiController
{
    public function index()
    {
        return view('aida-maps.index');
    }

    public function show($unitId)
    {
        $aidaMap = AidaMap::where('unit_id', $unitId)->first();

        if (! $aidaMap) {
            return $this->respondNotFound('No Aida Map for this unit was found!');
        }

        return $this->respond([
            'aida_map' => $aidaMap,
        ]);
    }

    public function pdf()
    {
        return view('aida-maps.pdf')->with(['serialized_data' => request('serialized_data')]);
    }

    public function store()
    {
        return $this->respond([
            'aida_map' => AidaMap::create(request()->all() + ['user_id' => auth()->user()->id]),
            'message' => 'Successfully added an aida map',
        ]);
    }
}
