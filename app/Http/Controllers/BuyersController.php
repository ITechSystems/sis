<?php

namespace App\Http\Controllers;

use App\Buyer;

class BuyersController extends Controller
{
    public function index()
    {
        return view('buyers.index');
    }

    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            'contact_number' => 'required',
            'marital_status' => 'required',
            'email' => 'required',
            'work_location' => 'required',
            'facebook_url' => 'required',
            'financing_type' => 'required',
            'country' => 'required',
            'equity_type' => 'required',
        ]);

        return Buyer::create(request()->all() + ['status' => 1]);
    }

    public function show(Buyer $buyer)
    {
        return $buyer;
    }

    public function update(Buyer $buyer)
    {
        $this->validate(request(), [
            'name' => 'required',
            'contact_number' => 'required',
            'marital_status' => 'required',
            'email' => 'required',
            'work_location' => 'required',
            'facebook_url' => 'required',
            'financing_type' => 'required',
            'country' => 'required',
            'equity_type' => 'required',
        ]);

        $buyer->update(request()->all());

        return $buyer;
    }

    public function destroy(Buyer $buyer)
    {
        $buyer->delete();

        return $buyer;
    }

    public function all()
    {
        if (! request('search')) {
            return Buyer::orderBy('created_at', 'desc')->get();
        }

        return Buyer::where(function ($query) {
            $query->where('id', '%'. request('search'))
                ->orWhere('name', 'like', '%' . request('search') . '%')
                ->orWhere('name', 'like', '%' . request('search') . '%')
                ->orWhere('contact_number', 'like', '%' . request('search') . '%')
                ->orWhere('marital_status', 'like', '%' . request('search') . '%')
                ->orWhere('email', 'like', '%' . request('search') . '%')
                ->orWhere('work_location', 'like', '%' . request('search') . '%')
                ->orWhere('facebook_url', 'like', '%' . request('search') . '%')
                ->orWhere('financing_type', 'like', '%' . request('search') . '%')
                ->orWhere('country', 'like', '%' . request('search') . '%')
                ->orWhere('equity_type', 'like', '%' . request('search') . '%');
        })->orderBy('created_at', 'desc')->get();
    }
}
