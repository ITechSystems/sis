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
            return Buyer::all();
        }

        return Buyer::where('id', request('search'))->get();
    }
}
