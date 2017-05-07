<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('units', function (Blueprint $table) {
            $table->engine = "InnoDB";
            $table->increments('id');
            $table->date('date');
            $table->string('developer');
            $table->string('location');
            $table->string('project');
            $table->string('zone');
            $table->string('phase');
            $table->string('block_lot');
            $table->float('lot_area', 10, 2);
            $table->string('lot_type');
            $table->float('floor_area', 10, 2);
            $table->string('house_model');
            $table->float('total_contract_price', 10, 2);
            $table->float('reservation_fee', 10, 2);
            $table->string('status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('units');
    }
}
