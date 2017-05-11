<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DataPolicy
{
    use HandlesAuthorization;

    public function index()
    {
        return auth()->user()->hasPermission('Uploading of RAW Data from partner Developers', 'READ/WRITE');
    }

    public function import()
    {
        return auth()->user()->hasPermission('Uploading of RAW Data from partner Developers', 'READ/WRITE');
    }

    public function export()
    {
        return auth()->user()->hasPermission('Uploading of RAW Data from partner Developers', 'READ/WRITE');
    }
}
