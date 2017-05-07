<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AidaMap extends Model
{
    protected $fillable = [
        'user_id',
        'unit_id',
        'point_x',
        'point_y',
    ];
}
