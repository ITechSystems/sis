<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $table = 'photos';

    protected $fillable = [
        'developer',
    	'house_model_name',
    	'description',
    ];

    public static $rules = [
    	'house_model_name' => 'required|min:2',
        'developer' => 'required|min:2',
    	'description' => 'required|min:3',
    	'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
    ];

    public static function saveImage($file, $data)
    {
        $developer = $data['developer'];

        $model = $data['house_model_name'];

        $description = $data['description'];

        $path = "public/$developer/models/$model/";

        $extension = $file->getClientOriginalExtension();

        \Storage::disk('local')->put($path . $file->getFilename() . '.' . $extension, \File::get($file));
        // \Storage::disk('local')->put($file->getFilename() . '.' . $extension, \File::get($file));

        //save to the database
        $photo = new Photo;

        $photo->developer = $developer;

        $photo->house_model_name = $model;

        $photo->description = $description;

        $photo->mime = $file->getClientMimeType();

        $photo->original_filename = $file->getClientOriginalName();

        $photo->filename = $file->getFilename() . '.' . $extension;

        $photo->save();
    }
}
