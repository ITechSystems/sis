<?php

namespace App\Http\Controllers;

use App\AidaMap;
use App\Mail\SendAidaMapToLeads;
use Illuminate\Support\Facades\Mail;

class AidaMapsController extends ApiController
{
    public function index()
    {
        $aidaMaps = AidaMap::with('buyer', 'user', 'unit')->latest()->get();

        return view('aida-maps.index', compact('aidaMaps'));
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
        $data = json_decode(request('serialized_data'));
        $download = request('download');
        $filePath = storage_path() . '/app/public/aida-map-' . time() . '.pdf';

        if (! (bool) $download) {
            return view('aida-maps.pdf', compact('data'));
        }

        return view('aida-maps.pdf', compact('data', 'download', 'filePath'));
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

    public function send()
    {
        Mail::to(request('email'))->send(new SendAidaMapToLeads(request('name')));

        return 'Email sent successfully';
    }
}
