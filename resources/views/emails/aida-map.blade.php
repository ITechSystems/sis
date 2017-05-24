<p>Dear {{ $aidaMap->buyer->first_name }} {{ $aidaMap->buyer->last_name }},</p>

<p>Attached is your requested personalized computation for {{ $aidaMap->unit->project }}’s {{ $aidaMap->unit->house_model }} {{ $aidaMap->unit->block_lot }} as of {{ $aidaMap->created_at->format('M d, Y') }}{{-- . For your protection, the attached eComputation is password-protected. --}}</p>
{{-- <p>To open the file, simply type in your last name and last followed by the last four (4) digits of your mobile number (Ex. delacruz1234)</p> --}}
{{-- <p>If your last name is hyphenated, please omit the hyphen (Ex. delacruznavarro instead of delacruz-navarro)</p> --}}
<p>You may view, download and print your eComputation using Adobe Reader. Click https://get.adobe.com/reader/ to download the latest version of this software.</p>
<p>You may also view our complete list of Properties available in our exclusive property portal. Visit www.properties.level-up.ph/myaccount to sign up or log in.</p>
<p>You may also reach us via:</p>
<p>{{-- 1.   --}}Accredited Level-up Property Consultant: {{ $aidaMap->user->first_name }} {{ $aidaMap->user->last_name }} - {{ $aidaMap->user->contact_number }}</p>
{{-- <p>2.  Property Portal: <AGENT WEBSITE URL></p>
<p>3.  Facebook Account: <AGENT FB ACCOUNT URL></p> --}}

<p>Improving lives, one house at a time...</p>
