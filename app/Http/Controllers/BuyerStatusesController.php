<?php

namespace App\Http\Controllers;

use App\BuyerStatus;

class BuyerStatusesController extends ApiController
{
    public function index()
    {
        return $this->respond([
            'buyer_statuses' => BuyerStatus::all(),
        ]);
    }
}
