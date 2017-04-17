<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDownpaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('downpayments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('data_id');
            $table->string('percentage');
            $table->string('total');
            $table->string('term');
            $table->string('amount');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('downpayments');
    }
}
