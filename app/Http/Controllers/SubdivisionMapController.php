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
        $this->validate($request, SubdivisionMap::$rules);
        
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
        $photo = SubdivisionMap::find($id);

        return view('multimedia.pictures.subdivision_maps.edit', compact('photo'));
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
        $file = $request->file;

        $photo = SubdivisionMap::find($id);

        $photo->description = $request->description;

        if($file){
          $this->validate(request(), SubdivisionMap::$file_rule);

          $path = "public/" . $request['developer'] . "/maps/" . $request['phase'] . "/";

          $extension = $file->getClientOriginalExtension();

          \Storage::disk('local')->put($path . $file->getFilename() . '.' . $extension, \File::get($file));

          $photo->mime = $file->getClientMimeType();

          $photo->original_filename = $file->getClientOriginalName();

          $photo->filename = $file->getFilename() . '.' . $extension;
        }

        $photo->save();

        return redirect('/pictures/subdivision_map');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($filename)
    {
        (new SubdivisionMap)->deletePhoto($filename);

        session()->flash('success', 'Successfully deleted file.');

        return redirect('/pictures/subdivision_map');
    }

    public function getPhases()
    {
        return (new SubdivisionMap)->getPhasesThatHasNoPictures(request()->developer);
    }

    public function viewMap($filename)
    {
      $photo = SubdivisionMap::withFilename($filename)->first();

      return view('multimedia.pictures.subdivision_maps._partials.view_map', compact('photo'));
    }
}
