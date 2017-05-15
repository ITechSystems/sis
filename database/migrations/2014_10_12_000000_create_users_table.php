<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('role_id')->nullable();
            $table->string('first_name', 50)->nullable();
            $table->string('middle_name', 50)->nullable();
            $table->string('last_name', 50)->nullable();
            $table->string('extension', 10)->nullable();
            $table->string('contact_number', 100)->nullable();
            $table->string('email', 50)->unique();
            $table->string('password', 100);
            $table->rememberToken();
            $table->timestamps();
        });

        DB::table('users')->insert([
            'role_id' => 1,
            'first_name' => 'Super',
            'last_name' => 'Admin',
            'contact_number' => '09391029301',
            'role_id' => 4,
            'email' => 'admin@nextlevel.com',
            'password' => bcrypt('admin123'),
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
