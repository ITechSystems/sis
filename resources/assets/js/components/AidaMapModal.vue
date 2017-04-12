<template>
    <modal id="aida-map-modal">
        <h4 slot="header" class="modal-title">AIDA Map</h4>
        <div class="row">
            <p class="heading">Developer's Information</p>
            <div class="col-md-12">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Developer Name</td>
                            <td>Propery Company of Friends Inc.</td>
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
                        <tr><td>Ms. Annie Biglang Biliagad</td></tr>
                        <tr><td>0917-4567890</td></tr>
                        <tr><td>anniebiglabili@gmail.com</td></tr>
                        <tr><td>Married</td></tr>
                        <tr><td>Bank Financing</td></tr>
                        <tr><td>OFW (Land-Based)</td></tr>
                        <tr><td>Singapore</td></tr>
                        <tr><td>Downpayment (Installment)</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-6">
            </div>
        </div>
        <div class="row">
            <p class="heading">Unit Details</p>
            <div class="col-md-6">
                <img src="/img/user7-128x128.jpg" alt="" class="unit-full">
            </div>
            <div class="col-md-6">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Block and Lot</td>
                            <td>SS11-1215</td>
                        </tr>
                        <tr>
                            <td>Lot Area</td>
                            <td>98</td>
                        </tr>

                        <tr>
                            <td>Lot Type</td>
                            <td>PC-8</td>
                        </tr>
                        <tr>
                            <td>Floor Area</td>
                            <td>52</td>
                        </tr>
                        <tr>
                            <td>House Model</td>
                            <td>Sophie</td>
                        </tr>
                        <tr>
                            <td>Total Contract Price</td>
                            <td>3,060,320.00</td>
                        </tr>
                        <tr>
                            <td>Reservation Fee</td>
                            <td>20, 000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <p class="heading">Map of the Subdivision</p>
            <div class="col-md-6 mb-20">
                <img src="/img/user7-128x128.jpg" alt="" class="subdivision-full">
            </div>
            <div class="col-md-6 mb-20">
                <img src="/img/user7-128x128.jpg" alt="" class="subdivision-magnified">
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
        <p slot="footer" class="footer-note">
            Date and time generated.
            <strong>Price are subject to change without prior notice.</strong>
        </p>
    </modal>
</template>

<script>
    import Modal from './Modal.vue';

    export default {
        components: {
            Modal
        }
    }
</script>
