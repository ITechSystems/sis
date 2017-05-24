<?php

namespace App;

use App\Requirement;
use Illuminate\Database\Eloquent\Model;

class BuyerRequirement extends Model
{
    public function requirement()
    {
        return $this->belongsTo(Requirement::class, 'requirement_id');
    }
}
