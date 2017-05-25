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
            $table->boolean('secondary_buyer', 1);
            $table->string('finance_type', 50);
            $table->string('marital_status', 30);
            $table->string('work_type', 50);
            $table->unsignedInteger('requirement_id');
            $table->timestamps();
        });
        $requirements = [
            [0, 'Local', 'Single', 'Bank', [1, 2, 3, 28, 4, 5, 6, 9, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 26]],
            [0, 'Overseas', 'Single', 'Bank', [1, 2, 28, 4, 5, 6, 9, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26]],
            [0, 'Local', 'Separated', 'Bank', [1, 2, 3, 4, 5, 6, 12, 9, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 26]],
            [0, 'Overseas', 'Separated', 'Bank', [1, 2, 4, 5, 6, 7, 12, 9, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26]],
            [0, 'Local', 'Married', 'Bank', [1, 2, 3, 4, 5, 6, 8, 9, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 26]],
            [0, 'Overseas', 'Married', 'Bank', [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26]],
            [1, 'Local', 'Married', 'Bank', [1, 2, 3, 8, 16, 17, 18, 19, 20, 22, 26]],
            [1, 'Overseas', 'Married', 'Bank', [1, 2, 7, 8, 16, 17, 18, 19, 20, 22, 23, 26]],
            [1, 'Foreigner', 'Married', 'Bank', [1, 2, 3, 7, 8, 16, 17, 18, 19, 20, 22, 23, 24, 26]],
            [0, 'Local', 'Widow', 'Bank', [1, 2, 3, 4, 5, 6, 9, 13, 14, 15, 16, 17, 18, 19, 20, 22, 26]],
            [0, 'Overseas', 'Widow', 'Bank', [1, 2, 3, 4, 5, 6, 7, 9, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 26]],
            [0, 'Overseas', 'Widow', 'Bank', [1, 2, 3, 4, 5, 6, 7, 9, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 26]],
            [0, 'Local', 'Single', 'In-House', [1, 2, 4, 10, 13, 14, 15, 16, 17, 18, 19, 21, 22, 26]],
            [0, 'Overseas', 'Single', 'In-House', [1, 2, 4, 10, 7, 13, 14, 15, 16, 17, 18, 19, 21, 22, 27, 26]],
            [1, 'Local', 'Single', 'In-House', [1, 2, 4, 10, 13, 14, 15, 16, 17, 18, 19, 21, 22, 26]],
            [1, 'Overseas', 'Single', 'In-House', [1, 2, 4, 10, 7, 13, 14, 15, 16, 17, 18, 19, 21, 22, 27, 26]],
            [0, 'Local', 'Separated', 'In-House', [1, 2, 4, 12, 10, 13, 14, 15, 16, 17, 18, 19, 21, 22, 26]],
            [0, 'Overseas', 'Separated', 'In-House', [1, 2, 4, 12, 10, 7, 13, 14, 15, 16, 17, 18, 19, 21, 22, 27, 26]],
            [0, 'Local', 'Married', 'In-House', [1, 2, 4, 10, 13, 14, 15, 16, 17, 18, 19, 21, 22, 26]],
            [0, 'Overseas', 'Married', 'In-House', [1, 2, 4, 10, 7, 13, 14, 15, 16, 17, 18, 19, 21, 22, 27, 26]],
            [1, 'Local', 'Married', 'In-House', [1, 2, 16, 17, 18, 19, 22, 26]],
            [1, 'Overseas', 'Married', 'In-House', [1, 2, 7, 16, 17, 18, 19, 22, 27, 26]],
            [1, 'Foreigner', 'Married', 'In-House', [1, 2, 7, 11, 16, 17, 18, 19, 22, 27, 26]],
        ];

        foreach ($requirements as $requirement) {
            foreach ($requirement[4] as $r) {
                DB::table('buyer_requirements')->insert([
                    'secondary_buyer' => $requirement[0],
                    'finance_type' => $requirement[3],
                    'marital_status' => $requirement[2],
                    'work_type' => $requirement[1],
                    'requirement_id' => $r,
                ]);
            }
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
