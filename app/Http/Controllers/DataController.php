<?php

namespace App\Http\Controllers;

use App\Helpers\Import_Export\Importer;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function index(){
    	return view('data.index');
    }

    public function import(){
    	$data = \App\Helpers\Import_Export\CsvMapper::map(file(request()->data));

    	return Importer::import($data);
    }
}
