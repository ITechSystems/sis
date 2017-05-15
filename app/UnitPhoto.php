<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UnitPhoto extends Model
{
    protected $table = 'unit_photos';

    protected $fillable = [
        'developer',
        'unit',
        'description',
    ];

    public static $rules = [
        'unit' => 'required|min:2',
        'developer' => 'required|min:2',
        'description' => 'required|min:3',
        'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
    ];

    protected $appends = [
        'picture_file'
    ];

    public static function saveImage($data)
    {
        \DB::transaction(function () use ($data) {
            $file = request()->file;

            $developer = $data['developer'];

            $unit = $data['unit'];

            $description = $data['description'];

            $path = "public/$developer/units/$unit/";

            $extension = $file->getClientOriginalExtension();

            \Storage::disk('local')->put($path . $file->getFilename() . '.' . $extension, \File::get($file));

            //save to the database
            $photo = new UnitPhoto;

            $photo->developer = $developer;

            $photo->unit = $unit;

            $photo->description = $description;

            $photo->mime = $file->getClientMimeType();

            $photo->original_filename = $file->getClientOriginalName();

            $photo->filename = $file->getFilename() . '.' . $extension;

            $photo->save();
        });
    }

    public function getPictureFileAttribute()
    {
        return $this->attributes['picture_file'] = self::getImage($this->filename);
    }

    public static function getImage($filename)
    {
        $photo = self::getPhotoByFilename($filename);

        $developer = $photo->developer;

        $unit = $photo->unit;

        $base_url = self::getBaseUrl();

        $image_src = "storage/$developer/units/$unit/" . $photo->filename;

        return $base_url . '/' . $image_src;
    }

    public static function getBaseUrl()
    {
        return env('APP_URL');
    }

    public static function getPhotoByFilename($filename)
    {
        return UnitPhoto::where('filename', $filename)->firstOrFail();
    }

    public static function getImagePath($filename)
    {
        $photo = self::getPhotoByFilename($filename);

        $developer = $photo->developer;

        $unit = $photo->unit;

        return "storage/$developer/units/$unit/" . $photo->filename;
    }
}
