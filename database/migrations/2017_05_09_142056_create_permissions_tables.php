<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermissionsTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100)->unique();
        });

        DB::table('permissions')->insert([
            ['name' => 'Leads'],
            ['name' => 'Buyer Journey Report'],
            ['name' => 'Inventory Viewer'],
            ['name' => 'Account Management'],
            ['name' => 'Commission Status'],
            ['name' => 'Activity Calendar'],
            ['name' => 'Loan Calculator'],
            ['name' => 'Agent Management'],
            ['name' => 'Team Production Report'],
            ['name' => 'Buyers Profile Report'],
            ['name' => 'Sales Activity Report'],
            ['name' => 'Buyer  Demographics Report'],
            ['name' => 'Database Management'],
            ['name' => 'Reports Dashboard'],
            ['name' => 'Data Extraction and Download'],
            ['name' => 'Files Management'],
            ['name' => 'Executive Report'],
            ['name' => 'Agent Sales Status Report (list of clients, MTD and YTD Summary of Gross&Net Sales)'],
            ['name' => 'Housing Units Pricelist'],
            ['name' => 'Uploading of RAW Data from partner Developers'],
            ['name' => 'Pricelist Auto Computation and Map location of available units'],
            ['name' => 'Shared Files Access: All File (downloadable) Types (Pictures, Videos, Audio)'],
            ['name' => 'Buyer Status Report (% construction, documentations, commission status etc.)'],
            ['name' => 'Sales Team Report (Summarized Report Per Team) MTD and YTD'],
            ['name' => 'Buyer Demographics Report'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('permissions');
    }
}
