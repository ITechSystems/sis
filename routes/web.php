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
    return view('welcome');
});

Auth::routes();

Route::get('/dashboard', 'HomeController@index');

Route::get('/inventory', 'InventoryController@index');

Route::get('/data/upload', 'DataController@index');
Route::post('/data/import', 'DataController@import');
Route::get('/data/export', 'DataController@export');
Route::get('/data/template', 'DataController@template');

Route::post('/search/unit', 'InventoryController@search');
Route::get('/search/getProjectsByLocation', 'InventoryController@getProjectsByLocation');
Route::get('/search/getBlocksByProject', 'InventoryController@getBlocksByProject');