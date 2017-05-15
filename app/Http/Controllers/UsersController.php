<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Mail\SendNotificationToUser;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class UsersController extends ApiController
{
    public function index()
    {
        if (request()->wantsJson()) {
            if (! request('search')) {
                return User::orderBy('created_at', 'desc')->get();
            }

            return User::where(function ($query) {
                $query->where('id', '%' . request('search'))
                    ->orWhere('first_name', 'like', '%' . request('search') . '%')
                    ->orWhere('last_name', 'like', '%' . request('search') . '%')
                    ->orWhere('middle_name', 'like', '%' . request('search') . '%')
                    ->orWhere('extension', 'like', '%' . request('search') . '%')
                    ->orWhere('contact_number', 'like', '%' . request('search') . '%')
                    ->orWhere('email', 'like', '%' . request('search') . '%');
            })->orderBy('created_at', 'desc')->get();
        }

        return view('users.index');
    }

    public function store(UserRequest $request)
    {
        $this->validate(request(), [
            'email' => 'required|email',
            'role_id' => 'required',
        ]);

        $password = randomString(10);

        $user = new User;
        $user->email = request('email');
        $user->role_id = request('role_id');
        $user->password = bcrypt($password);
        $user->save();

        Mail::to($user->email)->send(new SendNotificationToUser($user, $password));

        return $this->respond([
            'message' => 'Successfully sent the an email notication to the user.',
        ]);
    }

    public function edit(User $user)
    {
        return view('users.edit', compact('user'));
    }

    public function patch(User $user, UserRequest $request)
    {
        $user->update(request()->all());

        return $this->respond([
            'message' => 'Successfully updated the profile.',
        ]);
    }
}
