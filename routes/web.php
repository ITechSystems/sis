<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (auth()->user()) {
        return view('home');
    }
    return view('welcome');
});

Auth::routes();

Route::get('/dashboard', 'HomeController@index');

Route::get('/inventory', 'InventoryController@index');

Route::get('/data/upload', 'DataController@index');
Route::post('/data/import', 'DataController@import');
Route::get('/data/export', 'DataController@export');
Route::get('/data/template', 'DataController@template');

Route::get('/buyers', 'BuyersController@index');
Route::get('/buyers/all', 'BuyersController@all');
Route::get('/buyers/{buyer}', 'BuyersController@show');
Route::patch('/buyers/{buyer}', 'BuyersController@update');
Route::post('/buyers', 'BuyersController@store');
Route::delete('/buyers/{buyer}', 'BuyersController@destroy');

Route::get('/aida-maps', 'AidaMapsController@index');

Route::get('/units/locations', 'UnitLocationsController@index');

Route::post('/search/unit', 'InventoryController@search');
Route::get('/search/getProjectsByLocation', 'InventoryController@getProjectsByLocation');
Route::get('/search/getBlocksByProject', 'InventoryController@getBlocksByProject');
Route::get('/search/unitById/{id}', 'InventoryController@searchUnitById');
