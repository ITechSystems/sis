<?php

namespace App;

use App\Amenity;
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

    protected $appends = [
        'picture_file'
    ];

    public static function saveImage($data)
    {
        \DB::transaction(function()use($data){
            $file = request()->file;

            $developer = $data['developer'];

            $model = $data['house_model_name'];

            $lot_size = $data['lot_size'];

            $floor_size = $data['floor_size'];

            $number_of_rooms = $data['number_of_rooms'];

            $number_of_bathrooms = $data['number_of_bathrooms'];

            $storeys = $data['storeys'];

            $with_carport = $data['with_carport'];

            $description = $data['description'];

            $path = "public/$developer/models/$model/";

            $extension = $file->getClientOriginalExtension();

            \Storage::disk('local')->put($path . $file->getFilename() . '.' . $extension, \File::get($file));

            //save to the database
            $photo = new Photo;

            $photo->developer = $developer;

            $photo->house_model_name = $model;

            $photo->lot_size = $lot_size;

            $photo->floor_size = $floor_size;

            $photo->number_of_rooms = $number_of_rooms;

            $photo->number_of_bathrooms = $number_of_bathrooms;

            $photo->storeys = $storeys;

            $photo->with_carport = $with_carport;

            $photo->description = $description;

            $photo->mime = $file->getClientMimeType();

            $photo->original_filename = $file->getClientOriginalName();

            $photo->filename = $file->getFilename() . '.' . $extension;

            $photo->save();

            if(isset($data['amenities'])){
                \Log::info('saving amenities');
                //attach amenities
                foreach($data['amenities'] as $a){
                    $amenity = Amenity::find($a);

                    $photo->giveAmenity($amenity);
                }
            }
        });
    }

    public static function getImage($filename)
    {
        $photo = self::getPhotoByFilename($filename);

        $developer = $photo->developer;

        $model = $photo->house_model_name;

        $base_url = self::getBaseUrl();

        $image_src = "storage/$developer/models/$model/" . $photo->filename;

        return $base_url . '/' . $image_src;
    }

    public static function getBaseUrl()
    {
        return env('APP_URL');
    }

    public function scopeWithFilename($query, $filename)
    {
        return $query->where('filename', $filename);
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

    public function getPictureFileAttribute()
    {
        return $this->attributes['picture_file'] = self::getImage($this->filename);
    }

    public static function getLatestAndUniqueRecords()
    {
        $ids = Photo::distinct()
        ->select(\DB::raw('max(id) AS id, ANY_VALUE(house_model_name) as house_model_name, ANY_VALUE(filename) as filename'))
        ->groupBy('house_model_name')
        ->orderBy('id', 'asc')
        ->get();

        $unique_ids = array_unique(array_map(function($e){
          return $e['id'];
        }, $ids->toArray()));

        return Photo::whereIn('id', $unique_ids)->get();
    }

    public function amenities()
    {
        return $this->belongsToMany(Amenity::class);
    }

    public function giveAmenity($amenity)
    {
        return $this->amenities()->attach($amenity);
    }

    public function getModelNamesThatDoesNotHavePicture($developer)
    {
        $with_pics = Photo::distinct()
        ->where('developer', $developer)
        ->pluck('house_model_name');

        return $unique_phases = Unit::distinct()
        ->active()
        ->where('developer', request()->developer)
        ->whereNotIn('house_model', $with_pics)
        ->get(['house_model']);
    }
}
