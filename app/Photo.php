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

    public static function saveImage($data)
    {
        \DB::transaction(function()use($data){
            $file = request()->file;

            $developer = $data['developer'];

            $model = $data['house_model_name'];

            $description = $data['description'];

            $path = "public/$developer/models/$model/";

            $extension = $file->getClientOriginalExtension();

            \Storage::disk('local')->put($path . $file->getFilename() . '.' . $extension, \File::get($file));

            //save to the database
            $photo = new Photo;

            $photo->developer = $developer;

            $photo->house_model_name = $model;

            $photo->description = $description;

            $photo->mime = $file->getClientMimeType();

            $photo->original_filename = $file->getClientOriginalName();

            $photo->filename = $file->getFilename() . '.' . $extension;

            $photo->save();
        });
    }

    public static function getImage($filename)
    {
        $photo = self::getPhotoByFilename($filename);

        $developer = $photo->developer;

        $model = $photo->house_model_name;

        $base_url = self::getBaseUrl();

        $image_src = "storage/$developer/models/$model/" . $photo->filename;

        return $base_url . $image_src;
    }

    public static function getBaseUrl()
    {
        return 'http://www.sis.local/';
    }

    public static function getPhotoByFilename($filename)
    {
        return Photo::where('filename', $filename)->firstOrFail();
    }

    public static function getImagePath($filename)
    {
        $photo = self::getPhotoByFilename($filename);

        $developer = $photo->developer;

        $model = $photo->house_model_name;

        return "storage/$developer/models/$model/" . $photo->filename;
    }
}
