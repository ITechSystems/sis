<?php

namespace App\Http\Controllers;

use App\Unit;
use Illuminate\Http\Request;

class InventoryController extends ApiController
{
    public function index()
    {
        $locations = Unit::where('status', 'active')->distinct()->get(['location']);

        return view('inventory.index', compact('locations'));
    }

    public function search()
    {
        $data = request()->all();

        $locations = Unit::where('status', 'active')->distinct()->get(['location']);

        $developer = $data['developer'];

        $location = $data['location_horizontal'];

        $project_name = $data['project_name_horizontal'];

        $block = $data['block_horizontal'];

        $lot = $data['lot_horizontal'];

        $max_price = $data['price_maximum_horizontal'];

        $min_price = $data['price_minimum_horizontal'];

        $min_lot = $data['lot_area_min_horizontal'];

        $max_lot = $data['lot_area_max_horizontal'];

        $min_floor = $data['floor_area_min_horizontal'];

        $max_floor = $data['floor_area_max_horizontal'];

        $lot_type = $data['lot_type_horizontal'];

        $house_model = $data['house_model_horizontal'];

        $zone = $data['zone_horizontal'];

        $phase = $data['phase_horizontal'];

        $units = $this->getSearchQuery($location, $project_name, $block, $lot, $min_price, $max_price, $min_lot, $max_lot, $min_floor, $max_floor, $lot_type, $house_model, $zone, $phase, $developer);

        $result_count = count($units);

        if (request()->wantsJson()) {
            return $this->respond([
                'units' => $units,
                'result_count' => $result_count,
                'locations' => $locations,
            ]);
        }

        return view('inventory.index', compact('units', 'result_count', 'locations'));
    }

    public function getSearchQuery($location = '', $project_name = '', $block = '', $lot = '', $min_price = 0, $max_price = 0, $min_lot = 0, $max_lot = 0, $min_floor = 0, $max_floor, $lot_type = '', $house_model = '', $zone = '', $phase = '', $developer = '')
    {
        $max_price = (float) str_replace(',', '', $max_price);

        $min_price = (float) str_replace(',', '', $min_price);

        $units = Unit::active()
        ->select(\DB::raw("ANY_VALUE(date) AS date, ANY_VALUE(developer) as developer, ANY_VALUE(location) as location, ANY_VALUE(project) as project, ANY_VALUE(block_lot) as block_lot, ANY_VALUE(zone) as zone, ANY_VALUE(phase) as phase, ANY_VALUE(lot_area) as lot_area, ANY_VALUE(total_contract_price) as total_contract_price, ANY_VALUE(floor_area) as floor_area, ANY_VALUE(house_model) as house_model, ANY_VALUE(lot_type) as lot_type"))
        ->groupBy('block_lot')
        ->get();

        if ($project_name != '') {
            $units = Unit::where('project', 'like', '%' . $project_name . '%')
                ->where('status', 'active')
                ->select(\DB::raw("ANY_VALUE(date) AS date, ANY_VALUE(developer) as developer, ANY_VALUE(location) as location, ANY_VALUE(project) as project, ANY_VALUE(block_lot) as block_lot, ANY_VALUE(zone) as zone, ANY_VALUE(phase) as phase, ANY_VALUE(lot_area) as lot_area, ANY_VALUE(total_contract_price) as total_contract_price, ANY_VALUE(floor_area) as floor_area, ANY_VALUE(house_model) as house_model, ANY_VALUE(lot_type) as lot_type"))
                ->groupBy('block_lot')
                ->get();
        }

        //if $block is set
        if ($block != '') {
            $units = $units->filter(function ($item) use ($block) {
                return $item->block_lot == $block;
            });
        }

        //if lot is set
        if ($lot != '') {
            $units = $units->filter(function ($item) use ($lot) {
                $lot_str = explode("-", $item->block_lot)[1];

                return $lot_str == $lot;
            });
        }

        //if $location is set
        if ($location != '') {
            $units = $units->filter(function ($item) use ($location) {
                return $item->location == $location;
            });
        }

        //if $max_price is set
        if ($max_price > 0) {
            $units = $units->filter(function ($item) use ($max_price) {
                return $item->total_contract_price <= $max_price;
            });
        }

        //if $min_price is set
        if ($min_price > 0) {
            $units = $units->filter(function ($item) use ($min_price) {
                return $item->total_contract_price >= $min_price;
            });
        }

        //if $min_lot is set
        if (isset($min_lot)) {
            $units = $units->filter(function ($item) use ($min_lot) {
                return $item->lot_area >= $min_lot;
            });
        }

        //if $max_lot is set
        if (isset($max_lot)) {
            $units = $units->filter(function ($item) use ($max_lot) {
                return $item->lot_area <= $max_lot;
            });
        }

        //if $min_floor is set
        if (isset($min_floor)) {
            $units = $units->filter(function ($item) use ($min_floor) {
                return $item->floor_area >= $min_floor;
            });
        }

        //if $max_floor is set
        if (isset($max_floor)) {
            $units = $units->filter(function ($item) use ($max_floor) {
                return $item->floor_area <= $max_floor;
            });
        }

        //if $lot_type is set
        if ($lot_type != '') {
            $units = $units->filter(function ($item) use ($lot_type) {
                return $item->lot_type == $lot_type;
            });
        }

        //if $house_model is set
        if ($house_model != '') {
            $units = $units->filter(function ($item) use ($house_model) {
                if(strtolower($item->house_model) ==  strtolower($house_model)){
                    return $item;
                }
            });
        }

        //if $zone is set
        if($zone != ''){
            $units = $units->filter(function($item) use ($zone){
                return $item->zone == $zone;
            });
        }

        //if $phase is set
        if($phase != ''){
            $units = $units->filter(function($item) use($phase){
                return $item->phase == $phase;
            });
        }

        //if $developer
        if($developer != ''){
            $units = $units->filter(function($item) use($developer){
                return $item->developer == $developer;
            });
        }

        return $units;
    }

    public function getProjectsByLocation(Request $request)
    {
        return Unit::where('status', 'active')
            ->where('location', $request->location)
            ->distinct()
            ->get(['project']);
    }

    public function searchUnitById($blockLot)
    {
        return $units = Unit::active()
            ->where('block_lot', $blockLot)
            ->with('downpayment', 'loans')
            ->get();
    }
}
