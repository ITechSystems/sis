<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequirementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requirements', function (Blueprint $table) {
            $table->increments('id');
            $table->enum('type', ['A', 'B'])
                ->comment('
                    A - REQUIRED DOCUMENTS FROM BUYER,
                    B - REQUIRED DOCUMENTS FOR FILL-UP AND SIGNATURE OF BUYER
                ');
            $table->string('name', 300);
            $table->string('description', 300)->default(null);
            $table->timestamps();
        });

        DB::table('requirements')->insert([
            ['type' => 'A', 'name' => '1X1 Picture (3pcs.)', 'description' => ''],
            ['type' => 'A', 'name' => 'Photocopy of 2 Valid ID\'s (Government issued)', 'description' => ''],
            ['type' => 'A', 'name' => 'Residence Certificate for the current year (cedula)', 'description' => ''],
            ['type' => 'A', 'name' => 'Tax Identification Number', 'description' => ''],
            ['type' => 'A', 'name' => 'Latest Proof of Billing', 'description' => ''],
            ['type' => 'A', 'name' => 'Income Tax Return (ITR)', 'description' => ''],
            ['type' => 'A', 'name' => 'Photocopy of Passport', 'description' => ''],
            ['type' => 'A', 'name' => 'Marriage Contract', 'description' => ''],
            ['type' => 'A', 'name' => 'Post Dated Checks (Equity)', 'description' => ''],
            ['type' => 'A', 'name' => 'Post Dated Checks', 'description' => ''],
            ['type' => 'A', 'name' => 'Waiver of Rights', 'description' => ''],
            ['type' => 'A', 'name' => 'Legal Separation Paper', 'description' => ''],
            ['type' => 'B', 'name' => 'Buyer\'s Information Sheet (BIS)', 'description' => ''],
            ['type' => 'B', 'name' => 'Reservation Agreement (RA)', 'description' => ''],
            ['type' => 'B', 'name' => 'Counseling Form', 'description' => ''],
            ['type' => 'B', 'name' => 'Contract To Sell (CTS)', 'description' => ''],
            ['type' => 'B', 'name' => 'Deed of Absolute Sale (DOAS)', 'description' => ''],
            ['type' => 'B', 'name' => 'Deed of Reconveyance (DOR)', 'description' => ''],
            ['type' => 'B', 'name' => 'Credit Investigation Form (CI form) w/ sketch', 'description' => ''],
            ['type' => 'B', 'name' => 'Bank Housing Loan Application', 'description' => ''],
            ['type' => 'B', 'name' => 'Insurances', 'description' => ''],
            ['type' => 'B', 'name' => 'Home Improvement Contract (HIC) if applicable', 'description' => ''],
            ['type' => 'B', 'name' => 'Bank SPA Form', 'description' => ''],
            ['type' => 'B', 'name' => 'SPA - Marital Consent Form', 'description' => ''],
            ['type' => 'B', 'name' => 'Atty-In-Fact Information Sheet', 'description' => ''],
            ['type' => 'B', 'name' => 'Signature Card', 'description' => ''],
            ['type' => 'B', 'name' => 'PCFI SPA Form', 'description' => ''],
            ['type' => 'A', 'name' => 'Certificate of No Marriage', 'description' => ''],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('requirements');
    }
}
