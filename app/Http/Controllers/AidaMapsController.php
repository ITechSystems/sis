<?php

namespace App\Http\Controllers;

use App\AidaMap;
use App\Filters\AidaMapFilters;
use App\Mail\SendAidaMapToLeads;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Mail;

class AidaMapsController extends ApiController
{
    public function index(AidaMapFilters $filters)
    {
        if (request()->wantsJson()) {
            return $this->respond([
                'aida_maps' => AidaMap::filter($filters)->with('buyer', 'user', 'unit')->latest()->get(),
            ]);
        }

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

    public function pdf(AidaMap $aidaMap)
    {
        $aidaMap->load('buyer', 'user', 'unit.loans', 'unit.photos', 'unit.mapPhotos');
        $download = request('download');
        $filePath = storage_path() . '/app/public/' . $aidaMap->id . '.pdf';

        if (! (bool) $download) {
            return view('aida-maps.pdf', compact('aidaMap'));
        }

        return view('aida-maps.pdf', compact('aidaMap', 'download', 'filePath'));
    }

    public function create()
    {
        return view('aida-maps.create');
    }

    public function store()
    {
        return $this->respond([
            'aida_map' => AidaMap::create(request()->all() + ['user_id' => auth()->user()->id]),
            'message' => 'Successfully added an aida map',
        ]);
    }

    public function email(AidaMap $aidaMap)
    {
        $aidaMap->load('buyer', 'user', 'unit');

        Mail::to($aidaMap->buyer->email)->send(new SendAidaMapToLeads($aidaMap));

        File::delete(storage_path() . '/app/public/' . $aidaMap->id . '.pdf');

        return $this->respond([
            'message' => 'Email sent successfully',
        ]);
    }

    public function destroy(AidaMap $aidaMap)
    {
        $aidaMap->delete();

        return $this->respond([
            'message' => 'Successfully deleted the AIDA Map.',
        ]);
    }
}
