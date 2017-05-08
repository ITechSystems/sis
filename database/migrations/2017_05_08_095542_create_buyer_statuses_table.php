<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuyerStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buyer_statuses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50);
        });

        DB::table('buyer_statuses')->insert([
            'name' => 'New',
        ]);
        DB::table('buyer_statuses')->insert([
            'name' => 'Leads',
        ]);
        DB::table('buyer_statuses')->insert([
            'name' => 'Prospect',
        ]);
        DB::table('buyer_statuses')->insert([
            'name' => 'Closed',
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buyer_statuses');
    }
}
