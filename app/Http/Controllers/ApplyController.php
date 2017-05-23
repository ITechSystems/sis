<?php namespace App\Http\Controllers;
use App\Amenity;
use App\Photo;
use App\Unit;
use App\UnitPhoto;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Redirect;
use Session;
use Validator;

class ApplyController extends Controller {
  public function index()
  {
    $entries = Photo::getLatestAndUniqueRecords();

    $developers = Unit::distinct()->get(['developer']);

    $amenities = Amenity::all();

    return view('multimedia.pictures.index', compact('entries', 'developers', 'amenities'));
  }

  public function upload()
  {
    $this->validate(request(), Photo::$rules);

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
  }

  public function loadModelImage()
  {
    $entry = Photo::where('house_model_name', request()->house_model)
      ->orderBy('id', 'desc')->firstOrFail();

      return $entry->picture_file;
  }

  public function unitsIndex()
  {
    $entries = UnitPhoto::getLatestAndUniqueRecords();

    $developers = Unit::distinct()->get(['developer']);

    return view('multimedia.pictures.units_index', compact('entries', 'developers'));
  }

  public function unitsUpload()
  {
    $this->validate(request(), UnitPhoto::$rules);

    UnitPhoto::saveImage(request()->all());

    session()->flash('success', 'Successfully uploaded photo.');

    return redirect()->back();
  }

  public function viewImage($filename)
  {
    $photo = Photo::withFilename($filename)->with('amenities')->first();

    return view('multimedia.pictures.view_image', compact('photo'));
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

    return redirect('/pictures/upload');
  }

  public function editHouseModel($id)
  {
    $photo = Photo::find($id);

    $names = Unit::distinct()->get(['house_model']);

    $developers = Unit::distinct()->get(['developer']);

    $amenities = Amenity::all();

    $checked_amenities = $photo->amenities;

    return view('multimedia.pictures.edit_photo', compact('photo', 'names', 'developers', 'amenities', 'checked_amenities'));
  }

  public function updateHouseModel($id)
  {
    // $this->validate(request(), Photo::$rules);//need to add this for optional file
    $file = request()->file;

    $data = request()->all();

    $photo = Photo::find($id);

    $photo->developer = $data['developer'];

    $photo->house_model_name = $data['house_model_name'];

    $photo->lot_size = $data['lot_size'];

    $photo->floor_size = $data['floor_size'];

    $photo->number_of_rooms = $data['number_of_rooms'];

    $photo->number_of_bathrooms = $data['number_of_bathrooms'];

    $photo->storeys = $data['storeys'];

    $photo->with_carport = $data['with_carport'];

    $photo->description = $data['description'];

    if($file){
      $this->validate(request(), Photo::$file_rule);

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

  public function viewUnit($filename)
  {
    $photo = UnitPhoto::getPhotoByFilename($filename);

    return view('multimedia.pictures.view_unit', compact('photo'));
  }

  public function deleteUnitPhoto($filename)
  {
    $photo = UnitPhoto::getPhotoByFilename($filename);

    $image_src = UnitPhoto::getImagePath($filename);

    try{
      unlink($image_src);

      $photo->delete();
    }catch(\Exception $e){
      echo 'file not found';
    }

    $entries = UnitPhoto::all();

    $names = Unit::distinct()->get(['block_lot']);

    session()->flash('success', 'Successfully deleted file.');

    return redirect('/pictures/units/upload');
  }

  public function editUnitPhoto($id)
  {
    $photo = UnitPhoto::find($id);

    $names = Unit::distinct()->get(['block_lot']);

    return view('multimedia.pictures.edit_unit_photo', compact('photo', 'names'));
  }

  public function updateUnitPhoto($id)
  {
    $file = request()->file;

    $data = request()->all();

    $photo = UnitPhoto::find($id);

    $photo->developer = $data['developer'];

    $photo->unit = $data['unit'];

    $photo->description = $data['description'];

    if($file){
      $this->validate(request(), UnitPhoto::$file_rule);

      $path = "public/" . $data['developer'] . "/units/" . $data['unit'] . "/";

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

  public function getModelNames()
  {
    return (new Photo)->getModelNamesThatDoesNotHavePicture(request()->developer);
  }

  public function getBlockLots()
  {
    return (new UnitPhoto)->getUnitThatDoesNotHaveAPic(request()->developer);
  }
  
}