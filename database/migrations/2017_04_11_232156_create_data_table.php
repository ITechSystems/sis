<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDataTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('data', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->increments('id');
            $table->string('date');
            $table->string('location');
            $table->string('project');
            $table->string('block_lot');
            $table->string('lot_area');
            $table->string('lot_type');
            $table->string('floor_area');
            $table->string('house_model');
            $table->float('total_contract_price', 10, 2);
            $table->float('reservation_fee', 10, 2);
            $table->string('status');
        });

        // Schema::create('data', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('title');
        //     $table->string('location');
        //     $table->string('block');
        //     $table->string('number');
        //     $table->string('block_lot');
        //     $table->string('lot_area');
        //     $table->string('lot_type');
        //     $table->string('floor_area');
        //     $table->string('house_model');
        //     $table->string('total_contract_price');
        //     $table->string('reservation_fee');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data');
    }
}
