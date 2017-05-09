<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $table = 'photos';

    protected $fillable = [
    	'house_model_name',
    	'description',
    	'image'
    ];

    public static $rules = [
    	'house_model_name' => 'required|min:2',
    	'description' => 'required|min:3',
    	'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
    ];
}
