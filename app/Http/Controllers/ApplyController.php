<?php namespace App\Http\Controllers;
use App\Photo;
use App\Unit;
use App\UnitPhoto;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Redirect;
use Session;
use Validator;
class ApplyController extends Controller {
  public function index()
  {
    $entries = Photo::all();

    $names = Unit::distinct()->get(['house_model']);

    return view('multimedia.pictures.index', compact('entries', 'names'));
  }

  public function upload()
  {
    Photo::saveImage(request()->all());

    session()->flash('success', 'Successfully uploaded photo.');

    return redirect()->back();
  }

  public function get($filename)
  {
    $entry = Photo::where('filename', $filename)->firstOrFail();

    $developer = $entry->developer;

    $model = $entry->house_model_name;

    $path = "/$developer/models/$model/";

    return $file = \Storage::disk('local')->get($path . $entry->filename);

    // return (new Response($file, 200))->header('Content-Type', $entry->mime);
  }

  public function loadModelImage()
  {
    $entry = Photo::where('house_model_name', request()->house_model)
      ->orderBy('id', 'desc')->firstOrFail();

    $developer = $entry->developer;

    $model = $entry->house_model_name;

    $path = "storage/$developer/models/$model/";

    return $path . $entry->filename;
  }

  public function unitsIndex()
  {
    // $entries = Photo::all();

    $names = Unit::distinct()->get(['block_lot']);

    return view('multimedia.pictures.units_index', compact('names'));
  }

  public function unitsUpload()
  {
    UnitPhoto::saveImage(request()->all());

    session()->flash('success', 'Successfully uploaded photo.');

    return redirect()->back();
  }

  // public function uploadOld(Request $request) { FOR REMOVAL
  //   $data = $request->all();

  //   if(! $this->validate($request, Photo::$rules)){

  //   }

  //   $image = $data['file'];

  //   $filename  = time() . '.' . $image->getClientOriginalExtension();

  //   $path = public_path('img/' . $filename);

  //   $uploaded_image = Image::make($image->getRealPath())
  //       ->resize(468, 249)
  //       ->save($path);

  //   $house_model_name = trim($data['house_model_name']);

  //   $description = trim($data['description']);

  //   $image = $path;

  //   Photo::create([
  //       'house_model_name' => $house_model_name,
  //       'description' => $description,
  //       'image' => '/img//' . $filename
  //   ]);

  //   session()->flash('success', 'Successfully uploaded photo.');

  //   return redirect()->back();
  // }
  
}