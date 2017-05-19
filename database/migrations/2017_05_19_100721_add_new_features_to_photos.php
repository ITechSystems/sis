<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNewFeaturesToPhotos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    //house_features(lot size, flrss,  number of rooms, bt rooms, storey, carport y/n, amneties[checklist]) house model information
    public function up()
    {
        Schema::table('photos', function($table){
            $table->float('lot_size');
            $table->float('floor_size');
            $table->integer('number_of_rooms');
            $table->integer('number_of_bathrooms');
            $table->integer('storeys');
            $table->string('with_carport');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('photos', function($table){
            $table->dropColumn('lot_size');
            $table->dropColumn('floor_size');
            $table->dropColumn('number_of_rooms');
            $table->dropColumn('number_of_bathrooms');
            $table->dropColumn('storeys');
            $table->dropColumn('with_carport');
        });
    }
}
