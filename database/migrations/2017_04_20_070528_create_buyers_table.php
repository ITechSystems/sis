<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuyersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buyers', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->string('first_name', 50);
            $table->string('middle_name', 50)->nullable();
            $table->string('last_name', 50);
            $table->string('extension', 10)->nullable();
            $table->date('birth_date');
            $table->string('marital_status', 30);
            $table->string('email', 50);
            $table->string('work_type', 50);
            $table->string('facebook_url', 100);
            $table->string('financing_type', 50);
            $table->string('country', 30);
            $table->string('equity_type', 50);
            $table->string('mobile', 50);
            $table->string('landline', 50)->nullable()->default(null);
            $table->string('others', 50)->nullable()->default(null);
            $table->unsignedTinyInteger('status');
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
        Schema::dropIfExists('buyers');
    }
}
