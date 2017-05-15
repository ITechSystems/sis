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

    $path = "public/$developer/models/$model/";

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
    $names = Unit::distinct()->get(['block_lot']);

    return view('multimedia.pictures.units_index', compact('names'));
  }

  public function unitsUpload()
  {
    UnitPhoto::saveImage(request()->all());

    session()->flash('success', 'Successfully uploaded photo.');

    return redirect()->back();
  }

  public function viewImage($filename)
  {
    $image_src = Photo::getImage($filename);

    $photo = Photo::getPhotoByFilename($filename);

    return view('multimedia.pictures.view_image', compact('image_src', 'photo'));
  }

  public function deletePhoto($filename)
  {
    $photo = Photo::getPhotoByFilename($filename);

    $image_src = Photo::getImagePath($filename);

    try{
      unlink($image_src);

      $photo->delete();
    }catch(\Exception $e){
      echo 'file not found';
    }

    $entries = Photo::all();

    $names = Unit::distinct()->get(['house_model']);

    session()->flash('success', 'Successfully deleted file.');

    return view('multimedia.pictures.index', compact('entries', 'names'));
  }

  public function editHouseModel($id)
  {
    $photo = Photo::find($id);

    $names = Unit::distinct()->get(['house_model']);

    return view('multimedia.pictures.edit_photo', compact('photo', 'names'));
  }

  public function updateHouseModel($id)
  {
    $file = request()->file;

    $data = request()->all();

    $photo = Photo::find($id);

    $photo->developer = $data['developer'];

    $photo->house_model_name = $data['house_model_name'];

    $photo->description = $data['description'];

    if($file){
      $path = "public/" . $data['developer'] . "/models/" . $data['house_model_name'] . "/";

      $extension = $file->getClientOriginalExtension();

      \Storage::disk('local')->put($path . $file->getFilename() . '.' . $extension, \File::get($file));

      $photo->mime = $file->getClientMimeType();

      $photo->original_filename = $file->getClientOriginalName();

      $photo->filename = $file->getFilename() . '.' . $extension;
    }

    $photo->save();

    session()->flash('success', 'Successfully updated photo');

    return redirect()->back();
  }
  
}