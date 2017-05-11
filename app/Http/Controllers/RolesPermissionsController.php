<?php

namespace App\Http\Controllers;

use App\Role;
use Illuminate\Http\Request;

class RolesPermissionsController extends ApiController
{
    public function store(Role $role)
    {
        $data = collect(request('functionalities'))->mapWithKeys(function ($item) {
            return [$item['permission_id'] => [
                'access' => $item['access'],
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ]];
        });

        $role->permissions()->sync($data->toArray());

        return $this->respond([
            'message' => 'Successfully updated the permissions for this role',
        ]);
    }
}
