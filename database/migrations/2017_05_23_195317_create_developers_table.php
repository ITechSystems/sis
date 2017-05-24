<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDevelopersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('developers', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->string('preparer_name');
            $table->string('preparer_mobile');
            $table->string('preparer_mobile2');
            $table->string('preparer_landline');
            $table->string('preparer_email');
            $table->string('main_office_address');
            $table->string('branch_office1_address');
            $table->string('branch_office2_address');
            $table->string('main_office_landline');
            $table->string('main_office_landline2');
            $table->string('branch_office_landline');
            $table->string('branch_office_landline2');
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
        Schema::dropIfExists('developers');
    }
}
