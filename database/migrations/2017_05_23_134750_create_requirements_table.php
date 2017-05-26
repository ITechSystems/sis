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
            ['type' => 'A', 'name' => '1X1 Picture (3pcs.)'],
            ['type' => 'A', 'name' => 'Photocopy of 2 Valid ID\'s (Government issued)'],
            ['type' => 'A', 'name' => 'Residence Certificate for the current year (cedula)'],
            ['type' => 'A', 'name' => 'Tax Identification Number'],
            ['type' => 'A', 'name' => 'Latest Proof of Billing'],
            ['type' => 'A', 'name' => 'Income Tax Return (ITR)'],
            ['type' => 'A', 'name' => 'Photocopy of Passport'],
            ['type' => 'A', 'name' => 'Marriage Contract'],
            ['type' => 'A', 'name' => 'Post Dated Checks (Equity)'],
            ['type' => 'A', 'name' => 'Post Dated Checks'],
            ['type' => 'A', 'name' => 'Waiver of Rights'],
            ['type' => 'A', 'name' => 'Legal Separation Paper'],
            ['type' => 'B', 'name' => 'Buyer\'s Information Sheet (BIS)'],
            ['type' => 'B', 'name' => 'Reservation Agreement (RA)'],
            ['type' => 'B', 'name' => 'Counseling Form'],
            ['type' => 'B', 'name' => 'Contract To Sell (CTS)'],
            ['type' => 'B', 'name' => 'Deed of Absolute Sale (DOAS)'],
            ['type' => 'B', 'name' => 'Deed of Reconveyance (DOR)'],
            ['type' => 'B', 'name' => 'Credit Investigation Form (CI form) w/ sketch'],
            ['type' => 'B', 'name' => 'Bank Housing Loan Application'],
            ['type' => 'B', 'name' => 'Insurances'],
            ['type' => 'B', 'name' => 'Home Improvement Contract (HIC) if applicable'],
            ['type' => 'B', 'name' => 'Bank SPA Form'],
            ['type' => 'B', 'name' => 'SPA - Marital Consent Form'],
            ['type' => 'B', 'name' => 'Atty-In-Fact Information Sheet'],
            ['type' => 'B', 'name' => 'Signature Card'],
            ['type' => 'B', 'name' => 'PCFI SPA Form'],
            ['type' => 'A', 'name' => 'Certificate of No Marriage'],
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
