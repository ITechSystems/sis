<?php

namespace App;

use App\Unit;
use Illuminate\Database\Eloquent\Model;

class SubdivisionMap extends Model
{
    protected $appends = [
        'picture_file'
    ];

    public static $rules = [
        'phase' => 'required|min:2',
        'developer' => 'required|min:2',
        'description' => 'required|min:3',
        'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
    ];

    public static function saveImage($data)
    {
    	\DB::transaction(function () use ($data) {
            $file = request()->file;

            $developer = $data['developer'];

            $phase = $data['phase'];

            $description = $data['description'];

            $path = "public/$developer/maps/$phase/";
            \Log::info('saving SubdivisionMap: ' . $path);
            $extension = $file->getClientOriginalExtension();

            \Storage::disk('local')->put($path . $file->getFilename() . '.' . $extension, \File::get($file));

            //save to the database
            $photo = new SubdivisionMap;

            $photo->developer = $developer;

            $photo->phase = $phase;

            $photo->description = $description;

            $photo->mime = $file->getClientMimeType();

            $photo->original_filename = $file->getClientOriginalName();

            $photo->filename = $file->getFilename() . '.' . $extension;

            $photo->save();
        });
    }

    public static function getLatestAndUniqueRecords()
    {
        $ids = SubdivisionMap::distinct()
        ->select(\DB::raw('max(id) AS id, ANY_VALUE(phase) as phase, ANY_VALUE(filename) as filename'))
        ->groupBy('phase')
        ->orderBy('id', 'asc')
        ->get();

        $unique_ids = array_unique(array_map(function($e){
          return $e['id'];
        }, $ids->toArray()));

        return SubdivisionMap::whereIn('id', $unique_ids)->get();
    }

    public function getPictureFileAttribute()
    {
        return $this->attributes['picture_file'] = self::getImage($this->filename);
    }

    public static function getImage($filename)
    {
        $photo = self::getPhotoByFilename($filename);

        $developer = $photo->developer;

        $phase = $photo->phase;

        $base_url = self::getBaseUrl();

        $image_src = "storage/$developer/maps/$phase/" . $photo->filename;

        return $base_url . '/' . $image_src;
    }

    public static function getPhotoByFilename($filename)
    {
        return SubdivisionMap::where('filename', $filename)->firstOrFail();
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

        $phase = $photo->phase;

        return "storage/$developer/maps/$phase/" . $photo->filename;
    }

    public function deletePhoto($filename)
    {
        $photo = SubdivisionMap::getPhotoByFilename($filename);

        $image_src = SubdivisionMap::getImagePath($filename);

        try{
            unlink($image_src);

            $photo->delete();
        }catch(\Exception $e){
            echo 'file not found';
        }
    }

    public function getPhasesThatHasNoPictures($developer)
    {
        $with_pics = SubdivisionMap::distinct()
        ->where('developer', $developer)
        ->pluck('phase');

        return $unique_phases = Unit::distinct()
        ->active()
        ->where('developer', request()->developer)
        ->whereNotIn('phase', $with_pics)
        ->get(['phase']);
        
    }

}
