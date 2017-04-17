<?php

namespace App\Http\Controllers;

use App\Data;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    public function index()
    {
        return view('inventory.index');
    }

    public function search()
    {
    	$data = request()->all();

		$project_name = $data['project_name_horizontal'];

		$max_price = $data['price_maximum_horizontal'];

		$min_lot = $data['lot_area_min_horizontal'];

		$min_floor = $data['floor_area_min_horizontal'];

		$units = $this->getSearchQuery($project_name, $max_price, $min_lot, $min_floor);

		$result_count = count($units);

		return view('inventory.index', compact('units', 'result_count'));
    }

    public function getSearchQuery($project_name = '', $max_price = 0, $min_lot = 0, $min_floor){
    	$max_price = (float) $max_price;

    	$units = Data::where('project', 'like', '%' . $project_name . '%')->get();

    	//if $max_price is set
    	if($max_price > 0){
    		$units = $units->filter(function($item) use($max_price){
    			return $item->total_contract_price <= $max_price;    			
    		});
    	}

    	//if $min_lot is set
    	if(isset($min_lot)){
    		$units = $units->filter(function($item) use($min_lot){
    			return $item->lot_area >= $min_lot;
    		});
    	}



    	return $units;
    }
}
