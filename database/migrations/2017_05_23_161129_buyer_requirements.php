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

        foreach ([1, 2, 4, 10, 13, 14, 15, 16, 17, 18, 19, 21, 22, 26] as $requirement) {
            DB::table('buyer_requirements')->insert([
                'work_type' => 'Local',
                'marital_status' => 'Single',
                'finance_type' => 'In-House',
                'requirement_id' => $requirement,
            ]);
        }
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
