<?php

namespace App\Http\Controllers;

use App\Permission;
use App\Role;

class PermissionsController extends ApiController
{
    public function index()
    {
        if (request()->wantsJson()) {
            return $this->respond([
                'permissions' => Permission::all(),
            ]);
        }

        return view('permissions.index');
    }
}
