<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;

class Owner extends User
{
    protected $table = 'users';

    public static function boot()
    {
        parent::boot();

        static::addGlobalScope('role', function (Builder $builder) {
            $builder->where('role_id', '=', 6);
        });
    }
}
