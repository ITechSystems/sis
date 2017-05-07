<template>
    <modal id="aida-map-modal">
        <h4 slot="header" class="modal-title">AIDA Map</h4>
        <div class="alert alert-success" v-if="message">
            {{ message }}
        </div>
        <form id="aida-map-form">
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
                            <tr><td>{{ buyer.contact_number }}</td></tr>
                            <tr><td>{{ buyer.email }}</td></tr>
                            <tr><td>{{ buyer.marital_status }}</td></tr>
                            <tr><td>{{ buyer.financing_type }}</td></tr>
                            <tr><td>OFW (Land-Based) Hard-coded</td></tr>
                            <tr><td>{{ buyer.country }}</td></tr>
                            <tr><td>Downpayment (Installment) Hard-coded</td></tr>
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
                        <tbody v-if="unit.downpayment">
                            <tr>
                                <td rowspan="3">DownPayment</td>
                                <td>{{ unit.downpayment.percentage }}%</td>
                                <td>Equity</td>
                                <td>{{ unit.downpayment.equity | currency }}</td>
                            </tr>
                            <tr>
                                <td colspan="2">Terms</td>
                                <td>{{ unit.downpayment.term }}</td>
                            </tr>
                            <tr>
                                <td>Amount / Month</td>
                                <td>Net Of RF</td>
                                <td>{{ unit.downpayment.monthly | currency }}</td>
                            </tr>
                            <tr>
                                <td>Percentage</td>
                                <td>Loanable Amount</td>
                                <td>MRI</td>
                                <td>Monthly Amortization</td>
                            </tr>
                            <tr v-for="loan in unit.loans">
                                <td>{{ loan.percentage }}</td>
                                <td>{{ loan.total | currency }}</td>
                                <td>{{ loan.mri | currency }}</td>
                                <td>{{ loan.description }} {{ loan.monthly_percentage }}% {{ loan.years }} years -- {{ loan.monthly_amortization | currency }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <p class="heading">Map of the Subdivision</p>
                <div class="col-md-12 mb-20">
                    <img src="/img/map.png" alt="">
                    <!-- <project-map @plotted="recordPoints" :x="coordinate.x" :y="coordinate.y"></project-map> -->
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
            <div class="row">
                <div class="col-md-12 text-center">
                    <p class="heading">Preferred mode of sending to clients</p>
                    <div class="btn-group">
                        <button class="btn btn-primary">
                            <i class="fa fa-print"></i> Print
                        </button>
                        <button class="btn btn-danger" @click.prevent="sendEmail">
                            <i class="fa fa-envelope"></i> Email
                        </button>
                        <button class="btn btn-warning" @click.prevent="downloadPdf">
                            <i class="fa fa-file"></i> PDF
                        </button>
                        <button class="btn btn-success">
                            <i class="fa fa-image"></i> JPEG
                        </button>
                        <button class="btn btn-info">
                            <i class="fa fa-share"></i> Share
                        </button>
                    </div>
                    <form action="/aida-maps/pdf" method="post" id="pdf-form" target="_blank" style="display:none">
                        <input type="hidden" name="_token" v-model="$http.defaults.headers.common['X-CSRF-TOKEN']">
                        <input type="hidden" v-model="serializedData" name="serialized_data">
                    </form>
                </div>
            </div>
        </form>
        <p slot="footer" class="footer-note">
            <span>
                Date and time generated.
                <strong>Price are subject to change without prior notice.</strong>
            </span>
            <span>
                <button class="btn btn-default" type="button" data-dismiss="modal" @click="message = ''">Close</button>
                <button class="btn btn-primary" type="submit" form="aida-map-form">Save</button>
            </span>
        </p>
    </modal>
</template>

<script>
    import Modal from './Modal.vue';
    import ProjectMap from './ProjectMap.vue';

    export default {
        components: {
            Modal,
            ProjectMap,
        },

        props: ['unitId', 'buyerId'],

        data() {
            return {
                message: '',
                download: '',
                aidaMap: {},
                buyer: {},
                unit: {},
                coordinate: {
                    x: '',
                    y: '',
                },
            }
        },

        computed: {
            serializedData() {
                let data = {};

                data['unit'] = this.unit;
                data['buyer'] = this.buyer;

                return JSON.stringify(data);
            }
        },

        methods: {
            submitForm() {
                document.getElementById('pdf-form').submit();
            },

            downloadPdf() {
                this.submitForm();
            },

            sendEmail() {
                this.downloadPdf();

                this.$http.get(`/aida-maps/send`).then(response => {

                });
            }

            // recordPoints(coordinate) {
            //     this.coordinate.x = coordinate.x;
            //     this.coordinate.y = coordinate.y;
            // },

            // save() {
            //     this.$http.post(`/aida-maps`, {
            //         'point_x': this.coordinate.x,
            //         'point_y': this.coordinate.y,
            //         'unit_id': this.unitId,
            //     }).then(response => {
            //         this.message = response.data.message
            //     });
            // }
        },

        watch: {
            unitId() {
                this.$http.get(`/search/unitById/${this.unitId}`).then(response => {
                        this.unit = response.data;
                    }).catch(error => {
                        console.log(error);
                    });

                // this.$http.get(`/aida-maps/${this.unitId}`).then(response => {
                //         this.aidaMap = response.data.aida_map;
                //         this.coordinate.x = response.data.aida_map.point_x;
                //         this.coordinate.y = response.data.aida_map.point_y;
                //     }).catch(error => {
                //         console.log(error);
                //     });
            },

            buyerId() {
                this.$http.get(`/buyers/${this.buyerId}`).then(response => {
                        this.buyer = response.data.buyer;
                    }).catch(error => {
                        console.log(error);
                    });
            }
        }
    }
</script>
