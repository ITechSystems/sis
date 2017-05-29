<?php

namespace App;

use App\FloorPlan;
use App\Unit;
use Illuminate\Database\Eloquent\Model;

class FloorPlan extends Model
{
    protected $appends = [
        'picture_file'
    ];

    public static $rules = [
        'house_model_name' => 'required|min:2',
        'developer' => 'required|min:2',
        'description' => 'required|min:3',
        'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
    ];

    public static $file_rule = [
        'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
    ];

    public static function saveImage($data)
    {
    	\DB::transaction(function () use ($data) {
            $file = request()->file;

            $developer = $data['developer'];

            $house_model_name = $data['house_model_name'];

            $description = $data['description'];

            $path = "public/$developer/floor_plans/$house_model_name/";

            $extension = $file->getClientOriginalExtension();

            \Storage::disk('local')->put($path . $file->getFilename() . '.' . $extension, \File::get($file));

            //save to the database
            $photo = new FloorPlan;

            $photo->developer = $developer;

            $photo->house_model_name = $house_model_name;

            $photo->description = $description;

            $photo->mime = $file->getClientMimeType();

            $photo->original_filename = $file->getClientOriginalName();

            $photo->filename = $file->getFilename() . '.' . $extension;

            $photo->save();
        });
    }

    public static function getLatestAndUniqueRecords()
    {
        $ids = FloorPlan::distinct()
        ->select(\DB::raw('max(id) AS id, MAX(house_model_name) as house_model_name, MAX(filename) as filename'))
        ->groupBy('house_model_name')
        ->orderBy('id', 'asc')
        ->get();

        $unique_ids = array_unique(array_map(function($e){
          return $e['id'];
        }, $ids->toArray()));

        return FloorPlan::whereIn('id', $unique_ids)->get();
    }

    public function getPictureFileAttribute()
    {
        return $this->attributes['picture_file'] = self::getImage($this->filename);
    }

    public static function getImage($filename)
    {
        $photo = self::getPhotoByFilename($filename);

        $developer = $photo->developer;

        $house_model_name = $photo->house_model_name;

        $base_url = self::getBaseUrl();

        $image_src = "storage/$developer/floor_plans/$house_model_name/" . $photo->filename;

        return $base_url . '/' . $image_src;
    }

    public static function getPhotoByFilename($filename)
    {
        return FloorPlan::where('filename', $filename)->firstOrFail();
    }

    public static function getBaseUrl()
    {
        return env('APP_URL');
    }

    public function scopeWithFilename($query, $filename)
    {
        return $query->where('filename', $filename);
    }

    public static function getImagePath($filename)
    {
        $photo = self::getPhotoByFilename($filename);

        $developer = $photo->developer;

        $house_model_name = $photo->house_model_name;

        return "storage/$developer/floor_plans/$house_model_name/" . $photo->filename;
    }

    public function deletePhoto($filename)
    {
        $photo = FloorPlan::getPhotoByFilename($filename);

        $image_src = FloorPlan::getImagePath($filename);

        try{
            unlink($image_src);

            $photo->delete();
        }catch(\Exception $e){
            echo 'file not found';
        }
    }

    public function getModelNamesThatDoesNotHavePicture($developer)
    {
        $with_pics = FloorPlan::distinct()
        ->where('developer', $developer)
        ->pluck('house_model_name');

        return $unique_house_model_names = Unit::distinct()
        ->active()
        ->where('developer', request()->developer)
        ->whereNotIn('house_model', $with_pics)
        ->get(['house_model']);
        
    }
}
