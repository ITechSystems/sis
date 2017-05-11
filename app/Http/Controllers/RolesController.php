<?php

namespace App\Http\Controllers;

use App\Role;

class RolesController extends ApiController
{
    public function index()
    {
        return $this->respond([
            'roles' => Role::all(),
        ]);
    }

    public function show(Role $role)
    {
        return $this->respond([
            'role' => $role->load('permissions'),
        ]);
    }
}
