<?php

namespace App\Http\Controllers;

use App\Filters\UserFilters;
use App\Http\Requests\UserRequest;
use App\Mail\SendNotificationToUser;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class UsersController extends ApiController
{
    public function index(UserFilters $filters)
    {
        if (request()->wantsJson()) {
            return $this->respond([
                'users' => User::filter($filters)->get(),
            ]);
        }

        return view('users.index');
    }

    public function store()
    {
        $this->authorize('create', User::class);

        $this->validate(request(), [
            'email' => 'required|email',
            'role_id' => 'required',
        ]);

        $password = randomString(10);

        $user = new User;
        $user->email = request('email');
        $user->role_id = request('role_id');
        $user->password = $password;
        $user->save();

        Mail::to($user->email)->send(new SendNotificationToUser($user, $password));

        return $this->respond([
            'message' => 'Successfully sent the an email notication to the user.',
        ]);
    }

    public function edit(User $user)
    {
        $this->authorize('edit', $user);

        return view('users.edit', compact('user'));
    }

    public function patch(User $user, UserRequest $request)
    {
        $this->authorize('edit', $user);

        $user->update(request()->all());

        return $this->respond([
            'message' => 'Successfully updated the profile.',
        ]);
    }
}
