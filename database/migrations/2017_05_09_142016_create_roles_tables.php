<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100);
        });

        DB::table('roles')->insert([
            ['name' => 'SALESPERSON'],
            ['name' => 'SALES SUPERVISOR'],
            ['name' => 'SALES MANAGER'],
            ['name' => 'ADMIN/MIS MANAGER'],
            ['name' => 'SALES DIRECTOR'],
            ['name' => 'OWNER'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
