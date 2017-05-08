<template>
    <modal id="buyer-modal">
        <h4 slot="header" class="modal-title">
            {{ title }}
        </h4>
        <div class="alert alert-success" v-if="message">
            {{ message }}
        </div>
        <form id="buyerForm" class="container" @submit.prevent="save" @keydown="form.errors.clear($event.target.name)">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="last_name">Last Name</label>
                                <span class="text-danger" v-if="form.errors.has('last_name')">{{ form.errors.get('last_name') }}</span>
                                <input type="text" class="form-control" name="last_name" id="last_name" v-model="form.last_name" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="first_name">First Name</label>
                                <span class="text-danger" v-if="form.errors.has('first_name')">{{ form.errors.get('first_name') }}</span>
                                <input type="text" class="form-control" name="first_name" id="first_name" v-model="form.first_name" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="middle_name">Middle Name</label>
                                <span class="text-danger" v-if="form.errors.has('middle_name')">{{ form.errors.get('middle_name') }}</span>
                                <input type="text" class="form-control" name="middle_name" id="middle_name" v-model="form.middle_name" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="extension">Extension</label>
                                <span class="text-danger" v-if="form.errors.has('name')">{{ form.errors.get('extension') }}</span>
                                <input type="text" class="form-control" name="extension" id="extension" v-model="form.extension" :disabled="action == 'show'">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="birth_date">BirthDate</label>
                                <span class="text-danger" v-if="form.errors.has('birth_date')">{{ form.errors.get('birth_date') }}</span>
                                <input type="date" class="form-control" name="birth_date" id="birth_date" v-model="form.birth_date" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="marital_status">Marital Status</label>
                                <span class="text-danger" v-if="form.errors.has('marital_status')">{{ form.errors.get('marital_status') }}</span>
                                <select class="form-control" name="marital_status" id="marital_status" v-model="form.marital_status" :disabled="action == 'show'">
                                    <option value="">Choose</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Widowed">Widowed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <span class="text-danger" v-if="form.errors.has('email')">{{ form.errors.get('email') }}</span>
                                <input type="text" class="form-control" name="email" id="email" v-model="form.email" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="work_type">Work Type</label>
                                <span class="text-danger" v-if="form.errors.has('work_type')">{{ form.errors.get('work_type') }}</span>
                                <select class="form-control" name="work_type" id="work_type" v-model="form.work_type" :disabled="action == 'show'">
                                    <option value="">Choose</option>
                                    <option value="Local (Private)">Local (Private)</option>
                                    <option value="Local (Government)">Local (Government)</option>
                                    <option value="OFW (Land-Based)">OFW (Land-Based)</option>
                                    <option value="OFW (Sea-Based)">OFW (Sea-Based)</option>
                                    <option value="Self-Employed">Self-Employed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="facebook_url">Facebook URL</label>
                                <span class="text-danger" v-if="form.errors.has('facebook_url')">{{ form.errors.get('facebook_url') }}</span>
                                <input type="text" class="form-control" name="facebook_url" id="facebook_url" v-model="form.facebook_url" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="financing_type">Financing Type</label>
                                <span class="text-danger" v-if="form.errors.has('financing_type')">{{ form.errors.get('financing_type') }}</span>
                                <select class="form-control" name="financing_type" id="financing_type" v-model="form.financing_type" :disabled="action == 'show'">
                                    <option value="">Choose</option>
                                    <option value="Bank">Bank</option>
                                    <option value="In-House">In-House</option>
                                    <option value="Deferred">Deferred</option>
                                    <option value="Full Payment">Full Payment</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="country">Country(If OFW), City(If Local)</label>
                                <span class="text-danger" v-if="form.errors.has('country')">{{ form.errors.get('country') }}</span>
                                <select class="form-control" name="country" id="country" v-model="form.country" :disabled="action == 'show'">
                                    <option value="">Choose</option>
                                    <option v-for="country in countries" :value="country" v-if="form.work_type.includes('OFW')">
                                        {{ country }}
                                    </option>
                                    <option v-for="city in cities" :value="city" v-if="form.work_type.includes('Local')">
                                        {{ city }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="equity_type">Equity Type</label>
                                <span class="text-danger" v-if="form.errors.has('equity_type')">{{ form.errors.get('equity_type') }}</span>
                                <select class="form-control" name="equity_type" id="equity_type" v-model="form.equity_type" :disabled="action == 'show'">
                                    <option value="">Choose</option>
                                    <option value="Full">Full</option>
                                    <option value="Installment">Installment</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="mobile">Mobile</label>
                                <span class="text-danger" v-if="form.errors.has('mobile')">{{ form.errors.get('mobile') }}</span>
                                <input type="text" class="form-control" name="mobile" id="mobile" v-model="form.mobile" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="landline">LandLine</label>
                                <span class="text-danger" v-if="form.errors.has('landline')">{{ form.errors.get('landline') }}</span>
                                <input type="text" class="form-control" name="landline" id="landline" v-model="form.landline" :disabled="action == 'show'">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="others">Other Contacts</label>
                                <span class="text-danger" v-if="form.errors.has('others')">{{ form.errors.get('others') }}</span>
                                <input type="text" class="form-control" name="others" id="others" v-model="form.others" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6" v-if="action != 'create'">
                            <div class="form-group">
                                <label for="status">Status</label>
                                <span class="text-danger" v-if="form.errors.has('status')">{{ form.errors.get('status') }}</span>
                                <select class="form-control" name="status" id="status" v-model="form.status" :disabled="action == 'show'">
                                    <option v-for="buyerStatus in buyerStatuses" :value="buyerStatus.id">
                                        {{ buyerStatus.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <span slot="footer">
            <button class="btn btn-default" type="button" data-dismiss="modal" @click="message = ''">Close</button>
            <button class="btn btn-primary" type="submit" form="buyerForm" v-show="action != 'show'" :disabled="form.errors.any()">Save</button>
        </span>
    </modal>
</template>

<script>
    import Modal from './Modal.vue';
    import Form from '../core/Form.js';

    export default {
        components: {
            Modal
        },

        props: ['buyerId', 'action'],

        data() {
            return {
                message: '',
                buyerStatuses: [],
                countries: [],
                cities: [],
                form: new Form({
                    last_name: '',
                    first_name: '',
                    middle_name: '',
                    extension: '',
                    mobile: '',
                    landline: '',
                    others: '',
                    marital_status: '',
                    email: '',
                    work_type: '',
                    facebook_url: '',
                    financing_type: '',
                    country: '',
                    equity_type: '',
                    birth_date: '',
                    status: '1',
                })
            }
        },

        computed: {
            title() {
                if (this.action == 'create') {
                    return 'ADD NEW BUYER';
                }

                if (this.action == 'edit') {
                    return `EDIT PROFILE OF BUYER # ${this.buyerId}`;
                }

                return 'BUYER DETAILS';
            },

            requestType() {
                if (this.action == 'create') {
                    return 'post';
                }

                return 'patch'
            },

            url() {
                if (this.action == 'create') {
                    return '/buyers';
                }

                return `/buyers/${this.buyerId}`;
            }
        },

        mounted() {
            this.getBuyerStatuses();
            this.getCountries();
            this.getCities();
        },

        methods: {
            save() {
                this.form[this.requestType](this.url)
                    .then(data => {
                        this.$emit('saved');

                        this.message = data.message;
                    })
                    .catch(error => {});
            },

            getBuyerStatuses() {
                this.$http.get('/buyer-statuses').then(response => {
                    this.buyerStatuses = response.data.buyer_statuses;
                });
            },

            getCountries() {
                this.$http.get('/countries').then(response => {
                    this.countries = response.data.countries;
                });
            },

            getCities() {
                this.$http.get('/cities').then(response => {
                    this.cities = response.data.cities;
                });
            }
        },

        watch: {
            buyerId() {
                if (this.buyerId) {
                    this.form.get(`/buyers/${this.buyerId}`).then(data => {
                        this.form.last_name = data.buyer.last_name;
                        this.form.first_name = data.buyer.first_name;
                        this.form.middle_name = data.buyer.middle_name;
                        this.form.extension = data.buyer.extension;
                        this.form.marital_status = data.buyer.marital_status;
                        this.form.email = data.buyer.email;
                        this.form.work_type = data.buyer.work_type;
                        this.form.facebook_url = data.buyer.facebook_url;
                        this.form.financing_type = data.buyer.financing_type;
                        this.form.country = data.buyer.country;
                        this.form.birth_date = data.buyer.birth_date;
                        this.form.equity_type = data.buyer.equity_type;
                        this.form.mobile = data.buyer.mobile;
                        this.form.landline = data.buyer.landline;
                        this.form.others = data.buyer.others;
                        this.form.status = data.buyer.status.id;
                    });
                } else {
                    this.form.reset();
                }
            },
        }
    }
</script>
