<?php namespace App\Http\Controllers;
use App\Photo;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Redirect;
use Session;
use Validator;
class ApplyController extends Controller {

  public function upload(Request $request) {
    $data = $request->all();

    if(! $this->validate($request, Photo::$rules)){

    }

    $image = $data['file'];

    $filename  = time() . '.' . $image->getClientOriginalExtension();

    $path = public_path('img/' . $filename);

    $uploaded_image = Image::make($image->getRealPath())
        ->resize(468, 249)
        ->save($path);

    $house_model_name = trim($data['house_model_name']);

    $description = trim($data['description']);

    $image = $path;

    Photo::create([
        'house_model_name' => $house_model_name,
        'description' => $description,
        'image' => '/img//' . $filename
    ]);

    session()->flash('success', 'Successfully uploaded photo.');

    return redirect()->back();
  }
  
}