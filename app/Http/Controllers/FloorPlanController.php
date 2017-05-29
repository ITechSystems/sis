<?php

namespace App\Http\Controllers;

use App\FloorPlan;
use App\Unit;
use Illuminate\Http\Request;

class FloorPlanController extends Controller
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

        $entries = FloorPlan::getLatestAndUniqueRecords();

        return view('multimedia.pictures.floor_plans.create', compact('developers', 'entries'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, FloorPlan::$rules);
        
        FloorPlan::saveImage($request->all());

        session()->flash('success', 'Successfully uploaded photo.');

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($filename)
    {
        $photo = FloorPlan::withFilename($filename)->first();

        return view('multimedia.pictures.floor_plans._partials.view_floor_plan', compact('photo'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $photo = FloorPlan::find($id);

        return view('multimedia.pictures.floor_plans.edit', compact('photo'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {//return $request->description;
        $file = $request->file;

        $photo = FloorPlan::find($id);

        $photo->description = $request->description;

        if($file){
          $this->validate(request(), FloorPlan::$file_rule);

          $path = "public/" . $request['developer'] . "/floor_plans/" . $request['house_model_name'] . "/";

          $extension = $file->getClientOriginalExtension();

          \Storage::disk('local')->put($path . $file->getFilename() . '.' . $extension, \File::get($file));

          $photo->mime = $file->getClientMimeType();

          $photo->original_filename = $file->getClientOriginalName();

          $photo->filename = $file->getFilename() . '.' . $extension;
        }

        $photo->save();

        session()->flash('success', 'Successfully updated photo');

        return redirect('/pictures/floor_plan');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($filename)
    {
        (new FloorPlan)->deletePhoto($filename);

        session()->flash('success', 'Successfully deleted file.');

        return redirect('/pictures/floor_plan');
    }

    public function getModelNames()
    {
        return (new FloorPlan)->getModelNamesThatDoesNotHavePicture(request()->developer);
    }
}
