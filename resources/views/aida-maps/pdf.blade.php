<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AIDA MAP</title>
    <link rel="stylesheet" href="/css/libs.css">
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
    <div id="aida-map-modal" class="container">
        <form id="aida-map-form">
            <div class="row">
                <p class="heading">Developer's Information</p>
                <div class="col-md-12">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Developer Name</td>
                                <td>Property Company of Friends Inc.</td>
                            </tr>
                            <tr>
                                <td>Project Name</td>
                                <td>Lancaster New City</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>Cavite</td>
                            </tr>
                            <tr>
                                <td>Prepared By</td>
                                <td>Hervie Fajardo</td>
                            </tr>
                            <tr>
                                <td>Contact No.</td>
                                <td>+63 917 872 0176</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>hervie.fajardo@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <p class="heading">Buyer's Computations For</p>
                <div class="col-md-6">
                    <table class="table">
                        <tbody>
                            <tr><td>{{ $data->buyer->last_name }}, {{ $data->buyer->first_name }}</td></tr>
                            <tr><td>{{ $data->buyer->contact_number }}</td></tr>
                            <tr><td>{{ $data->buyer->email }}</td></tr>
                            <tr><td>{{ $data->buyer->marital_status }}</td></tr>
                            <tr><td>{{ $data->buyer->financing_type }}</td></tr>
                            <tr><td>OFW (Land-Based) Hard-coded</td></tr>
                            <tr><td>{{ $data->buyer->country }}</td></tr>
                            <tr><td>DownPayment (Installment) Hard-coded</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6">
                </div>
            </div>
            <div class="row">
                <p class="heading">Unit Details</p>
                <div class="col-md-6">
                    <img src="/img/house.jpg" alt="" class="unit-full">
                </div>
                <div class="col-md-6">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Block and Lot</td>
                                <td>{{ $data->unit->block_lot }}</td>
                            </tr>
                            <tr>
                                <td>Lot Area</td>
                                <td>{{ $data->unit->lot_area }}</td>
                            </tr>
                            <tr>
                                <td>Lot Type</td>
                                <td>{{ $data->unit->lot_type }}</td>
                            </tr>
                            <tr>
                                <td>Floor Area</td>
                                <td>{{ $data->unit->floor_area }}</td>
                            </tr>
                            <tr>
                                <td>House Model</td>
                                <td>{{ $data->unit->house_model }}</td>
                            </tr>
                            <tr>
                                <td>Total Contract Price</td>
                                <td>{{ number_format($data->unit->total_contract_price, 2) }}</td>
                            </tr>
                            <tr>
                                <td>Reservation Fee</td>
                                <td>{{ number_format($data->unit->reservation_fee, 2) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <p class="heading">DownPayment and Loanable Amount</p>
                <div class="col-md-12">
                    <table class="table">
                        <tbody v-if="unit.downpayment">
                            <tr>
                                <td rowspan="3">DownPayment</td>
                                <td>{{ $data->unit->downpayment->percentage }}%</td>
                                <td>Equity</td>
                                <td>{{ $data->unit->downpayment->equity }}</td>
                            </tr>
                            <tr>
                                <td colspan="2">Terms</td>
                                <td>{{ $data->unit->downpayment->term }}</td>
                            </tr>
                            <tr>
                                <td>Amount / Month</td>
                                <td>Net Of RF</td>
                                <td>{{ $data->unit->downpayment->monthly }}</td>
                            </tr>
                            <tr>
                                <td>Percentage</td>
                                <td>Loanable Amount</td>
                                <td>MRI</td>
                                <td>Monthly Amortization</td>
                            </tr>
                            @foreach($data->unit->loans as $loan)
                                <tr>
                                    <td>{{ $loan->percentage }}</td>
                                    <td>{{ $loan->total }}</td>
                                    <td>{{ $loan->mri }}</td>
                                    <td>{{ $loan->description }} {{ $loan->monthly_percentage }}% {{ $loan->years }} years -- {{ $loan->monthly_amortization }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <p class="heading">Map of the Subdivision</p>
                <div class="col-md-12 mb-20">
                    <img src="/img/map.png">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p class="heading">Document Requirements For</p>
                    <ul class="requirements">
                        <li>3pcs. 1x1 ID Picture (Buyer, Spouse & Atty-in-Fact) w/ name &amp; Unit ID at the back</li>
                        <li>2 Valid ID's with 3 specimen signature (Photocopy only) (Buyer &amp; Spouse)</li>
                        <li>SSS, GSIS, Driver's License, Voter's, PRC, Passport</li>
                        <li>Postal ID's are allowed for AIF only (or unemployed spouse)</li>
                        <li>Passport - validity should not be expired (Buyer)</li>
                        <li>Must have date of arrival &amp; departure</li>
                        <li>Residence Certificate for the Current Year (Cedula) (Spouse &amp; Atty-In-Fact)</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <p class="heading">For Reservations, Contact Us At</p>
                    <address>
                        <h3 class="name">Mr. Hervie Fajardo</h3>
                        <span class="mobile">Globe: +63 917 872 0176</span>
                        <span class="mobile">Smart: +63 917 565 8645</span>
                        <h5>LANDLINE HOTLINES</h5>
                        <span class="telephone">Manila Telephone: (02) 256 6574</span>
                        <span class="telephone">Cavite Telephone: (046) 440 6474</span>
                    </address>
                    <address>
                        <p class="office">Main Office</p>
                        <span class="barangay">55 Tinio St. Brgy. Addition Hills</span>
                        <span class="city">Mandaluyong City</span>
                        <span class="country">Philippines 1552</span>
                    </address>
                    <address>
                        <p class="office">Branch Office</p>
                        <span class="barangay">55 Gen. Aguinaldo Hi-way Brgy. Tanzang Luma</span>
                        <span class="city">Imus City, Cavite</span>
                        <span class="country">Philippines 4103</span>
                    </address>
                </div>
            </div>
        </form>
        <p class="footer-note">
            <span>
                Date and time generated.
                <strong>Price are subject to change without prior notice.</strong>
            </span>
        </p>
    </div>
    <script>window.close();</script>
</body>
</html>


