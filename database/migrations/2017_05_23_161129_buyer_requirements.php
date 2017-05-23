<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BuyerRequirements extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buyer_requirements', function (Blueprint $table) {
            $table->increments('id');
            $table->string('finance_type', 50);
            $table->string('marital_status', 30);
            $table->string('work_type', 50);
            $table->unsignedInteger('requirement_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buyer_requirements');
    }
}
