<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->hasPermission('Agent Management', 'READ/WRITE');
    }

    public function edit(User $user, $profile)
    {
        return $user->id == $profile->id || $user->hasPermission('Agent Management', 'READ/WRITE');
    }

    public function destroy(User $user)
    {
        return $user->hasPermission('Agent Management', 'READ/WRITE');
    }
}
