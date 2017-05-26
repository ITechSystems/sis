<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuyersInformation extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buyers_information', function(Blueprint $table){
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('last_name');
            $table->string('first_name');
            $table->string('middle_name');
            $table->date('birth_date');
            $table->string('birth_place');
            $table->string('tin');
            $table->string('sss_gsis_umid_no');
            $table->string('gender');
            $table->string('citizenship');
            $table->string('civil_status');
            $table->string('telephone_number');
            $table->string('fax');
            $table->string('mobile_number');
            $table->string('email');
            $table->string('residence_no');
            $table->string('residence_street');
            $table->string('residence_subdivision');
            $table->string('residence_barangay');
            $table->string('residence_municipality');
            $table->string('residence_city');
            $table->string('residence_province');
            $table->string('residence_country');
            $table->string('residence_zip_code');
            $table->string('employment_type');
            $table->string('with_attorney_in_fact');//need to check
            $table->string('with_coborrower');//need to check
            $table->string('employer_or_business_name');
            $table->string('employer_or_business_address_street_no');
            $table->string('employer_or_business_address_street');
            $table->string('employer_or_business_address_barangay');
            $table->string('employer_telephone_number');
            $table->string('employer_email');
            $table->string('employer_fax');
            $table->string('employer_municipality');
            $table->string('employer_city');
            $table->string('employer_province');
            $table->string('employer_country');
            $table->string('employer_zip_code');
            $table->string('profession');
            $table->string('occupational_position');
            $table->string('tenure');
            $table->string('preferred_mailing_address');
            $table->string('mailing_address_no');
            $table->string('mailing_address_street');
            $table->string('mailing_address_subdivision');
            $table->string('mailing_address_barangay');
            $table->string('mailing_address_municipality');
            $table->string('mailing_address_city');
            $table->string('mailing_address_province');
            $table->string('mailing_address_country');
            $table->string('mailing_address_zip_code');

            //spouse
            $table->string('spouse_last_name');
            $table->string('spouse_first_name');
            $table->string('spouse_middle_name');
            $table->date('spouse_birth_date');
            $table->string('spouse_birth_place');
            $table->string('spouse_citizenship');
            $table->string('spouse_mobile');
            $table->string('spouse_telephone_no');
            $table->string('spouse_fax');
            $table->string('spouse_email');
            $table->string('spouse_tin');
            $table->string('spouse_sss_gsis_umid');
            $table->string('spouse_employment_type');
            $table->string('spouse_employer_or_business_name');
            $table->string('spouse_employer_or_business_address_no');
            $table->string('spouse_employer_or_business_address_street');
            $table->string('spouse_employer_or_business_address_barangay');
            $table->string('spouse_employer_or_business_address_municipality');
            $table->string('spouse_employer_or_business_address_city');
            $table->string('spouse_employer_or_business_address_province');
            $table->string('spouse_employer_or_business_address_country');
            $table->string('spouse_employer_or_business_address_zip_code');
            $table->string('spouse_profession');
            $table->string('spouse_position');
            $table->string('spouse_tenure');

            //beneficiary
            $table->string('beneficiary1_last_name');
            $table->string('beneficiary1_first_name');
            $table->string('beneficiary1_middle_name');
            $table->string('beneficiary1_last_name');
            $table->string('beneficiary1_birthdate');
            $table->string('beneficiary1_relation');
            $table->string('beneficiary2_last_name');
            $table->string('beneficiary2_first_name');
            $table->string('beneficiary2_middle_name');
            $table->string('beneficiary2_last_name');
            $table->string('beneficiary2_birthdate');
            $table->string('beneficiary2_relation');
            $table->string('beneficiary3_last_name');
            $table->string('beneficiary3_first_name');
            $table->string('beneficiary3_middle_name');
            $table->string('beneficiary3_last_name');
            $table->string('beneficiary3_birthdate');
            $table->string('beneficiary3_relation');
            $table->string('beneficiary4_last_name');
            $table->string('beneficiary4_first_name');
            $table->string('beneficiary4_middle_name');
            $table->string('beneficiary4_last_name');
            $table->string('beneficiary4_birthdate');
            $table->string('beneficiary4_relation');

            //buyer's profile
            $table->string('profile_buyer_rank');           
            $table->boolean('profile_buyer_fund_employment');
            $table->boolean('profile_buyer_fund_business');
            $table->boolean('profile_buyer_fund_inheritance');
            $table->boolean('profile_buyer_fund_remittance');
            $table->boolean('profile_buyer_fund_others');
            $table->boolean('profile_buyer_fund_others_string');
            $table->string('profile_spouse_rank');
            $table->boolean('profile_spouse_fund_employment');
            $table->boolean('profile_spouse_fund_business');
            $table->boolean('profile_spouse_fund_inheritance');
            $table->boolean('profile_spouse_fund_remittance');
            $table->boolean('profile_spouse_fund_others');
            $table->boolean('profile_spouse_fund_others_string');
            $table->string('profile_buyer_income');
            $table->string('profile_spouse_income');
            $table->string('profile_current_home_ownership');
            $table->string('profile_current_home_ownership_others_string');
            $table->string('profile_length_of_stay');
            $table->string('profile_number_of_household');
            $table->boolean('profile_purpose_primary_home');
            $table->boolean('profile_purpose_vacation');
            $table->boolean('profile_purpose_retirement');
            $table->boolean('profile_purpose_investment_sell');
            $table->boolean('profile_purpose_investment_lease');
            $table->boolean('profile_known_mouth');
            $table->boolean('profile_known_brokers_or_agents');
            $table->boolean('profile_known_flyer');
            $table->boolean('profile_known_referral');
            $table->boolean('profile_known_internet');
            $table->boolean('profile_known_billboard');
            $table->boolean('profile_known_exhibit');
            $table->boolean('profile_known_other');

            //loan details
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
