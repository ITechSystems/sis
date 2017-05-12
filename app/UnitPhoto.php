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

    public static function saveImage($data)
    {
    	\DB::transaction(function()use($data){
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
}
