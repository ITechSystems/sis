<template>
    <form>
        <div class="row">
            <p class="heading">Developer's Information</p>
            <div class="col-md-12">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Developer Name</td>
                            <td>Propety Company of Friends Inc.</td>
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
                        <tr><td>{{ buyer.last_name }}, {{ buyer.first_name }}</td></tr>
                        <tr><td>{{ buyer.mobile }}</td></tr>
                        <tr><td>{{ buyer.email }}</td></tr>
                        <tr><td>{{ buyer.marital_status }}</td></tr>
                        <tr><td>{{ buyer.financing_type }}</td></tr>
                        <tr><td>{{ buyer.work_type }}</td></tr>
                        <tr><td>{{ buyer.country }}</td></tr>
                        <tr><td>{{ buyer.equity_type }}</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-6">
            </div>
        </div>
        <div class="row">
            <p class="heading">Unit Details</p>
            <div class="col-md-6">
                <img :src="houseModelPath" alt="" class="unit-full">
            </div>
            <div class="col-md-6">
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Block and Lot</td>
                            <td>{{ unit.block_lot }}</td>
                        </tr>
                        <tr>
                            <td>Lot Area</td>
                            <td>{{ unit.lot_area }}</td>
                        </tr>
                        <tr>
                            <td>Lot Type</td>
                            <td>{{ unit.lot_type }}</td>
                        </tr>
                        <tr>
                            <td>Floor Area</td>
                            <td>{{ unit.floor_area }}</td>
                        </tr>
                        <tr>
                            <td>House Model</td>
                            <td>{{ unit.house_model }}</td>
                        </tr>
                        <tr>
                            <td>Total Contract Price</td>
                            <td>{{ unit.total_contract_price | currency }}</td>
                        </tr>
                        <tr>
                            <td>Reservation Fee</td>
                            <td>{{ unit.reservation_fee | currency }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <p class="heading">DownPayment and Loanable Amount</p>
            <div class="col-md-12">
                <table class="table">
                    <thead v-if="unit.downpayment">
                        <tr>
                            <th>Equity {{ unit.downpayment.percentage }}%</th>
                            <th>Terms (Years)</th>
                            <th>Amount/Month</th>
                        </tr>
                    </thead>
                    <tbody v-if="unit.downpayment">
                        <tr>
                            <td>{{ unit.downpayment.equity | currency }}</td>
                            <td>{{ unit.downpayment.term | currency }}</td>
                            <td>{{ unit.downpayment.monthly | currency }}</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Finance Type</th>
                            <th>Price</th>
                            <th>Loan Percentage</th>
                            <th>Monthly Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ unit.loans[0].finance_type }}</td>
                            <td>{{ unit.total_contract_price | currency }}</td>
                            <td>{{ unit.loans[0].percentage }}</td>
                            <td>{{ unit.loans[0].monthly_percentage }}</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Loanable Amount</th>
                            <th>MRI and FIRE</th>
                            <th v-for="loan in unit.loans">{{ loan.years }} years</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ unit.loans[0].total | currency }}</td>
                            <td>{{ unit.loans[0].mri | currency }}</td>
                            <td v-for="loan in unit.loans" v-if="loan.finance_type == financingType">
                                {{ loan.monthly_amortization | currency }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <p class="heading">Map of the Subdivision</p>
            <div class="col-md-6 mb-20">
                <img :src="mapPath" alt="" style="width: 100%">
            </div>
            <div class="col-md-6 mb-20">
                <img :src="unitPath" alt="" style="width: 100%">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <p class="heading">Document Requirements For</p>
                <ul class="requirements">
                    <li>3pcs. 1x1 ID Picture (Buyer, Spouse &amp; Atty-in-Fact) w/ name &amp; Unit ID at the back</li>
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
</template>

<script>
    import ProjectMap from '../../components/ProjectMap.vue';

    export default {
        components: {
            ProjectMap,
        },

        computed: {
            photo() {
                if (this.unit.photos) {
                    return this.unit.photos.find(photo => {
                        return photo.developer == this.unit.developer;
                    });
                }

                return '';
            },

            mapPhoto() {
                if (this.unit.map_photos) {
                    return this.unit.map_photos.find(photo => {
                        return photo.developer == this.unit.developer;
                    });
                }

                return '';
            },

            unitPhoto() {
                if (this.unit.unit_photos) {
                    return this.unit.unit_photos.find(photo => {
                        return photo.developer == this.unit.developer;
                    });
                }

                return '';
            },

            houseModelPath() {
                if (this.photo) {
                    return `/storage/${this.photo.developer}/models/${this.photo.house_model_name}/${this.photo.filename}`;
                }
            },

            mapPath() {
                if (this.mapPhoto) {
                    return `/storage/${this.mapPhoto.developer}/maps/${this.mapPhoto.phase}/${this.mapPhoto.filename}`;
                }
            },

            unitPath() {
                if (this.unitPhoto) {
                    return `/storage/${this.unitPhoto.developer}/units/${this.unitPhoto.unit}/${this.unitPhoto.filename}`;
                }
            }
        },

        props: ['unit', 'buyer', 'financingType'],
    }
</script>
