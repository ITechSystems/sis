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
        return Buyer::create(request()->all() + ['status' => 1]);
    }

    public function show(Buyer $buyer)
    {
        return $buyer;
    }

    public function update(Buyer $buyer)
    {
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
        return Buyer::all();
    }
}
