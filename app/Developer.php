<?php

namespace App;

use App\BranchOffice;
use Illuminate\Database\Eloquent\Model;

class Developer extends Model
{
    public function branchOffices()
    {
        return $this->hasMany(BranchOffice::class, 'developer_id');
    }
}
