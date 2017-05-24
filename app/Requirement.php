<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requirement extends Model
{
    public function requirement()
    {
        return $this->hasMany(BuyerRequirement::class, 'requirement_id');
    }
}
