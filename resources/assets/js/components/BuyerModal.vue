<template>
    <modal id="buyer-modal">
        <h4 slot="header" class="modal-title">
            {{ title }}
        </h4>
        <div class="alert alert-success" v-if="message != ''">
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
                                <label for="contact_number">Contact Number/s</label>
                                <span class="text-danger" v-if="form.errors.has('contact_number')">{{ form.errors.get('contact_number') }}</span>
                                <input type="text" class="form-control" name="contact_number" id="contact_number" v-model="form.contact_number" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="marital_status">Marital Status</label>
                                <span class="text-danger" v-if="form.errors.has('marital_status')">{{ form.errors.get('marital_status') }}</span>
                                <select class="form-control" name="marital_status" id="marital_status" v-model="form.marital_status" :disabled="action == 'show'">
                                    <option value="">Choose</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="widowed">Widowed</option>
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
                                <label for="work_location">Work Location</label>
                                <span class="text-danger" v-if="form.errors.has('work_location')">{{ form.errors.get('work_location') }}</span>
                                <input type="text" class="form-control" name="work_location" id="work_location" v-model="form.work_location" :disabled="action == 'show'">
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
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="country">Country(If OFW), City(If Local)</label>
                                <span class="text-danger" v-if="form.errors.has('country')">{{ form.errors.get('country') }}</span>
                                <input type="text" class="form-control" name="country" id="country" v-model="form.country" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="equity_type">Equity Type</label>
                                <span class="text-danger" v-if="form.errors.has('equity_type')">{{ form.errors.get('equity_type') }}</span>
                                <select class="form-control" name="equity_type" id="equity_type" v-model="form.equity_type" :disabled="action == 'show'">
                                    <option value="">Choose</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <span slot="footer">
            <button class="btn btn-default" type="button" data-dismiss="modal">Close</button>
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
                form: new Form({
                    last_name: '',
                    first_name: '',
                    middle_name: '',
                    extension: '',
                    contact_number: '',
                    marital_status: '',
                    email: '',
                    work_location: '',
                    facebook_url: '',
                    financing_type: '',
                    country: '',
                    equity_type: '',
                }),
                message: '',
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

        methods: {
            save() {
                this.form[this.requestType](this.url)
                    .then(data => {
                        this.$emit('saved');

                        this.message = data.message;
                    })
                    .catch(error => {});
            },
        },

        watch: {
            buyerId() {
                if (this.buyerId) {
                    this.form.get(`/buyers/${this.buyerId}`).then(data => {
                        this.form.last_name = data.last_name;
                        this.form.first_name = data.first_name;
                        this.form.middle_name = data.middle_name;
                        this.form.extension = data.extension;
                        this.form.contact_number = data.contact_number;
                        this.form.marital_status = data.marital_status;
                        this.form.email = data.email;
                        this.form.work_location = data.work_location;
                        this.form.facebook_url = data.facebook_url;
                        this.form.financing_type = data.financing_type;
                        this.form.country = data.country;
                        this.form.equity_type = data.equity_type;
                    });
                } else {
                    this.form.reset();
                }
            },
        }
    }
</script>
