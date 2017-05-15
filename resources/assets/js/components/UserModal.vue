<template>
    <modal id="user-modal">
        <h4 slot="header" class="modal-title">
            {{ title }}
        </h4>
        <div class="alert alert-success" v-if="message">
            {{ message }}
        </div>
        <form id="userForm" class="container" @submit.prevent="save" @keydown="form.errors.clear($event.target.name)">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <span class="text-danger" v-if="form.errors.has('email')">{{ form.errors.get('email') }}</span>
                        <input id="email" type="text" class="form-control" name="email" v-model="form.email" required autofocus>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="role_id">Role</label>
                        <span class="text-danger" v-if="form.errors.has('role_id')">{{ form.errors.get('role_id') }}</span>
                        <select id="role_id" type="role_id" class="form-control" name="role_id" v-model="form.role_id" required>
                            <option v-for="role in roles" :value="role.id">{{ role.name }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
        <span slot="footer">
            <button class="btn btn-default" type="button" data-dismiss="modal" @click="message = ''">Close</button>
            <button class="btn btn-primary" type="submit" form="userForm" v-show="action != 'show'" :disabled="form.errors.any()">Save</button>
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

        props: ['userId', 'action'],

        data() {
            return {
                message: '',
                roles: [],
                form: new Form({
                    email: '',
                    role_id: '1',
                })
            }
        },

        computed: {
            title() {
                if (this.action == 'create') {
                    return 'ADD NEW USER';
                }

                if (this.action == 'edit') {
                    return `EDIT PROFILE OF USER # ${this.buyerId}`;
                }

                return 'USER DETAILS';
            },

            requestType() {
                if (this.action == 'create') {
                    return 'post';
                }

                return 'patch'
            },

            url() {
                if (this.action == 'create') {
                    return '/users';
                }

                return `/users/${this.userId}`;
            }
        },

        mounted() {
            this.getRoles();
        },

        methods: {
            getRoles() {
                this.$http.get('/roles').then(response => {
                    this.roles = response.data.roles;
                });
            },

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
            // buyerId() {
            //     if (this.buyerId) {
            //         this.form.get(`/buyers/${this.buyerId}`).then(data => {
            //             this.form.last_name = data.buyer.last_name;
            //             this.form.first_name = data.buyer.first_name;
            //             this.form.middle_name = data.buyer.middle_name;
            //             this.form.extension = data.buyer.extension;
            //             this.form.marital_status = data.buyer.marital_status;
            //             this.form.email = data.buyer.email;
            //             this.form.work_type = data.buyer.work_type;
            //             this.form.facebook_url = data.buyer.facebook_url;
            //             this.form.financing_type = data.buyer.financing_type;
            //             this.form.country = data.buyer.country;
            //             this.form.birth_date = data.buyer.birth_date;
            //             this.form.equity_type = data.buyer.equity_type;
            //             this.form.mobile = data.buyer.mobile;
            //             this.form.landline = data.buyer.landline;
            //             this.form.others = data.buyer.others;
            //             this.form.status = data.buyer.status.id;
            //         });
            //     } else {
            //         this.form.reset();
            //     }
            // },
        }
    }
</script>
