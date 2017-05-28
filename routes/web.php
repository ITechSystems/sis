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

Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::get('password/reset/{token}', 'Auth\ForgotPasswordController@showResetForm')->name('password.reset');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', 'HomeController@index');

    Route::get('/inventory', 'InventoryController@index');

    Route::get('/data/upload', 'DataController@index');
    Route::post('/data/import', 'DataController@import');
    Route::get('/data/export', 'DataController@export');
    Route::get('/data/template', 'DataController@template');

    Route::get('/data/amenities', 'AmenityController@index');
    Route::get('/data/amenities/create', 'AmenityController@create');
    Route::post('/data/amenities', 'AmenityController@store');
    Route::get('/data/amenities/getAll', 'AmenityController@getAll');

    Route::get('/buyers', 'BuyersController@index');
    Route::get('/buyers/all', 'BuyersController@all');
    Route::get('/buyers/{buyer}', 'BuyersController@show');
    Route::patch('/buyers/{buyer}', 'BuyersController@update');
    Route::post('/buyers', 'BuyersController@store');
    Route::delete('/buyers/{buyer}', 'BuyersController@destroy');

    Route::get('/aida-maps', 'AidaMapsController@index');
    Route::get('/aida-maps/create', 'AidaMapsController@create');
    Route::get('/aida-maps/{unitId}', 'AidaMapsController@show');
    Route::get('/aida-maps/{aidaMap}/pdf', 'AidaMapsController@pdf');
    Route::get('/aida-maps/{aidaMap}/email', 'AidaMapsController@email');
    Route::delete('/aida-maps/{aidaMap}', 'AidaMapsController@destroy');
    Route::post('/aida-maps', 'AidaMapsController@store');

    Route::get('/units/locations', 'UnitLocationsController@index');

    Route::get('/search/getDevelopers', 'InventoryController@getDevelopers');
    Route::get('/search/locations', 'InventoryController@getLocationsByDeveloper');
    Route::post('/search/unit', 'InventoryController@search');
    Route::get('/search/getProjectsByLocation', 'InventoryController@getProjectsByLocation');
    Route::get('/search/getBlocksByProject', 'InventoryController@getBlocksByProject');
    Route::get('/search/unitById/{blockLot}', 'InventoryController@searchUnitById');

    Route::get('/buyer-statuses', 'BuyerStatusesController@index');


    Route::get('/countries', 'CountriesController@index');
    Route::get('/cities', 'CitiesController@index');
    //for image upload
    Route::get('/pictures/upload', function () {
        return View::make('multimedia.pictures.index');
    });
    Route::post('/apply/upload', 'ApplyController@upload');

    Route::get('/pictures/upload', 'ApplyController@index');

    Route::get('fileentry/get/{filename}', [
        'as' => 'getentry', 'uses' => 'ApplyController@get']);
    Route::get('/load/model/image', 'ApplyController@loadModelImage');

    Route::get('/pictures/units/upload', 'ApplyController@unitsIndex');
    Route::post('/apply/units/upload', 'ApplyController@unitsUpload');

    Route::get('/view/image/{filename}', 'ApplyController@viewImage');
    Route::delete('/delete/photo/{filename}', 'ApplyController@deletePhoto');
    Route::get('/house_models/{id}/edit', 'ApplyController@editHouseModel');
    Route::patch('/photo/house_model/{id}', 'ApplyController@updateHouseModel');
    Route::get('/house_model_photos/getModelNames', 'ApplyController@getModelNames');

    Route::get('/view/unit/{filename}', 'ApplyController@viewUnit');
    Route::delete('/delete/unit_photo/{filename}', 'ApplyController@deleteUnitPhoto');
    Route::get('/unit_photo/{id}/edit', 'ApplyController@editUnitPhoto');
    Route::patch('/photo/unit/{id}', 'ApplyController@updateUnitPhoto');
    Route::get('/units/getBlockLots', 'ApplyController@getBlockLots');

    Route::get('/pictures/subdivision_map', 'SubdivisionMapController@create');
    Route::get('/units/getPhases', 'SubdivisionMapController@getPhases');
    Route::post('/apply/maps/upload', 'SubdivisionMapController@store');
    Route::get('/view/map/{filename}', 'SubdivisionMapController@viewMap');
    Route::delete('/delete/map/{filename}', 'SubdivisionMapController@destroy');
    Route::get('/maps/{id}/edit', 'SubdivisionMapController@edit');
    Route::patch('/maps/update/{id}', 'SubdivisionMapController@update');

    Route::get('/roles', 'RolesController@index');
    Route::get('/roles/{role}', 'RolesController@show');

    Route::get('/permissions', 'PermissionsController@index');

    Route::post('/roles/{role}/permissions', 'RolesPermissionsController@store');

    Route::get('/users', 'UsersController@index');
    Route::get('/users/{user}/edit', 'UsersController@edit');
    Route::patch('/users/{user}', 'UsersController@patch');
    Route::post('/users', 'UsersController@store');
    Route::delete('/users/{user}', 'UsersController@destroy');
});
