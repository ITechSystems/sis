<?php

namespace App\Http\Controllers;

use App\Buyer;
use App\Http\Requests\BuyerRequest;

class BuyersController extends ApiController
{
    public function index()
    {
        return view('buyers.index');
    }

    public function store(BuyerRequest $request)
    {
        $buyer = Buyer::create(
            $request->all() + ['status' => 1, 'user_id' => auth()->user()->id]
        );

        return $this->respond([
            'buyer' => $buyer,
            'message' => 'Successfully Added A Buyer',
        ]);
    }

    public function show(Buyer $buyer)
    {
        return $buyer;
    }

    public function update(Buyer $buyer, BuyerRequest $request)
    {
        $buyer->update($request->all());

        return $this->respond([
            'buyer' => $buyer,
            'message' => 'Successfully Updated The Buyer\'s Info',
        ]);
    }

    public function destroy(Buyer $buyer)
    {
        $buyer->delete();

        return $buyer;
    }

    public function all()
    {
        if (! request('search')) {
            return Buyer::with('agent')->orderBy('created_at', 'desc')->get();
        }

        return Buyer::with('agent')->where(function ($query) {
            $query->where('id', '%' . request('search'))
                ->orWhere('first_name', 'like', '%' . request('search') . '%')
                ->orWhere('last_name', 'like', '%' . request('search') . '%')
                ->orWhere('middle_name', 'like', '%' . request('search') . '%')
                ->orWhere('extension', 'like', '%' . request('search') . '%')
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
