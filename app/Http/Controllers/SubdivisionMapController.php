<?php

namespace App\Http\Controllers;

use App\SubdivisionMap;
use App\Unit;
use Illuminate\Http\Request;

class SubdivisionMapController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $developers = Unit::distinct()->get(['developer']);

        $entries = SubdivisionMap::getLatestAndUniqueRecords();

        return view('multimedia.pictures.subdivision_maps.create', compact('developers', 'entries'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        SubdivisionMap::saveImage($request->all());

        session()->flash('success', 'Successfully uploaded photo.');

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getPhases()
    {
        return Unit::distinct()->where('developer', request()->developer)->get(['phase']);
    }

    public function viewMap($filename)
  {
    $photo = SubdivisionMap::withFilename($filename)->first();

    return view('multimedia.pictures.subdivision_maps._partials.view_map', compact('photo'));
  }
}
