<template>
    <modal id="buyer-modal">
        <h4 slot="header" class="modal-title">
            {{ title }}
        </h4>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="client_name">Client Name</label>
                                <input type="text" class="form-control" name="client_name" id="client_name" v-model="name" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="contact_number">Contact Number/s</label>
                                <input type="text" class="form-control" name="contact_number" id="contact_number" v-model="contact_number" :disabled="action == 'show'">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="marital_status">Marital Status</label>
                                <input type="text" class="form-control" name="marital_status" id="marital_status" v-model="marital_status" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" name="email" id="email" v-model="email" :disabled="action == 'show'">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="work_location">Work Location</label>
                                <input type="text" class="form-control" name="work_location" id="work_location" v-model="work_location" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="facebook_url">Facebook URL</label>
                                <input type="text" class="form-control" name="facebook_url" id="facebook_url" v-model="facebook_url" :disabled="action == 'show'">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="financing_type">Financing Type</label>
                                <input class="form-control" name="financing_type" id="financing_type" v-model="financing_type" :disabled="action == 'show'">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="country">Country(If OFW), City(If Local)</label>
                                <input type="text" class="form-control" name="country" id="country" v-model="country" :disabled="action == 'show'">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="equity_type">Equity Type</label>
                                <input type="text" class="form-control" name="equity_type" id="equity_type" v-model="equity_type" :disabled="action == 'show'">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span slot="footer">
            <button class="btn btn-default" type="button" data-dismiss="modal">Close</button>
            <button class="btn btn-primary" v-show="action != 'show'" @click="save">Save</button>
        </span>
    </modal>
</template>

<script>
    import Modal from './Modal.vue';

    export default {
        components: {
            Modal
        },

        props: ['buyerId', 'action'],

        data() {
            return {
                name: '',
                contact_number: '',
                marital_status: '',
                email: '',
                work_location: '',
                facebook_url: '',
                financing_type: '',
                country: '',
                equity_type: '',
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

            method() {
                if (this.action == 'create') {
                    return 'post';
                }

                return 'patch'
            },

            uri() {
                if (this.action == 'create') {
                    return '/buyers';
                }

                return `/buyers/${this.buyerId}`;
            }
        },

        methods: {
            save() {
                this.$http[this.method](this.uri, this.$data).then(response => {
                    this.$emit('saved');
                });
            },

            clearForm() {
                this.name = '';
                this.contact_number = '';
                this.marital_status = '';
                this.email = '';
                this.work_location = '';
                this.facebook_url = '';
                this.financing_type = '';
                this.country = '';
                this.equity_type = '';
            }
        },

        watch: {
            buyerId() {
                if (this.buyerId) {
                    this.$http.get(`/buyers/${this.buyerId}`).then(response => {
                        this.name = response.data.name;
                        this.contact_number = response.data.contact_number;
                        this.marital_status = response.data.marital_status;
                        this.email = response.data.email;
                        this.work_location = response.data.work_location;
                        this.facebook_url = response.data.facebook_url;
                        this.financing_type = response.data.financing_type;
                        this.country = response.data.country;
                        this.equity_type = response.data.equity_type;
                    });
                } else {
                    this.clearForm();
                }
            },
        }
    }
</script>
