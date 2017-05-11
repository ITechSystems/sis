<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermissionsTables extends Migration
{
    protected $names = [
        'Leads',
        'Buyer Journey Report',
        'Inventory Viewer',
        'Account Management',
        'Commission Status',
        'Activity Calendar',
        'Loan Calculator',
        'Agent Management',
        'Team Production Report',
        'Buyers Profile Report',
        'Sales Activity Report',
        'Buyer  Demographics Report',
        'Database Management',
        'Reports Dashboard',
        'Data Extraction and Download',
        'Files Management',
        'Executive Report',
        'Agent Sales Status Report',
        'Housing Units Pricelist',
        'Uploading of RAW Data from partner Developers',
        'Pricelist Auto Computation and Map location of available units',
        'Shared Files Access: All File Types',
        'Buyer Status Report',
        'Sales Team Report',
        'Buyer Demographics Report',
    ];

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

        foreach ($this->names as $name) {
            DB::table('permissions')->insert([
                'name' => $name,
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
        Schema::dropIfExists('permissions');
    }
}
