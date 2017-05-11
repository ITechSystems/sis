<template>
    <modal id="permission-modal">
        <h4 slot="header" class="modal-title">Functionalities</h4>
        <div class="alert alert-success" v-if="message">
            {{ message }}
        </div>
        <div>
            <p>{{ role.name }}</p>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Functions</th>
                        <th>READ</th>
                        <th>READ/WRITE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="permission in permissions">
                        <td>{{ permission.name }}</td>
                        <td>
                            <input type="checkbox" @click="removeExistingFunction(permission.id, 'READ')" :value="checkBoxValue(permission.id, 'READ')" v-model="functionalities">
                        </td>
                        <td>
                            <input type="checkbox" @click="removeExistingFunction(permission.id, 'READ/WRITE')" :value="checkBoxValue(permission.id, 'READ/WRITE')" v-model="functionalities">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p slot="footer" class="footer-note">
            <span>
                <button class="btn btn-default" type="button" data-dismiss="modal" @click="message = ''">Close</button>
                <button class="btn btn-primary" type="button" @click="save">Save</button>
            </span>
        </p>
    </modal>
</template>

<script>
    import Modal from './Modal.vue';

    export default {
        components: {
            Modal,
        },

        props: ['roleId'],

        data() {
            return {
                role: '',
                message: '',
                functionalities: [],
                permissions: [],
            }
        },

        mounted() {
            this.getPermissions();
        },

        methods: {
            checkBoxValue(permission_id, access) {
                return {permission_id: permission_id, access: access};
            },

            getPermissions() {
                this.$http.get('/permissions').then(response => {
                    this.permissions = response.data.permissions;
                });
            },

            removeExistingFunction(permission_id, access) {
                let existing = this.functionalities.find(functionality => {
                    return functionality.permission_id == permission_id && functionality.access != access;
                });

                if (existing) {
                    this.functionalities.splice(this.functionalities.indexOf(existing), 1);
                }
            },

            save() {
                this.$http.post(`/roles/${this.roleId}/permissions`, {
                    functionalities: this.functionalities,
                }).then(response => {
                    this.message = response.data.message;
                });
            }
        },

        watch: {
            roleId() {
                this.$http.get(`/roles/${this.roleId}`).then(response => {
                    this.role = response.data.role;
                    this.role.permissions.forEach(permission => {
                        this.functionalities.push({
                            permission_id: permission.pivot.permission_id,
                            access: permission.pivot.access,
                        });
                    });
                });
            }
        }
    }
</script>
