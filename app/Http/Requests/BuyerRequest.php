<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BuyerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'last_name' => 'required',
            'first_name' => 'required',
            'contact_number' => 'required',
            'marital_status' => 'required',
            'email' => 'required',
            'work_location' => 'required',
            'facebook_url' => 'required',
            'financing_type' => 'required',
            'country' => 'required',
            'equity_type' => 'required',
        ];
    }
}
