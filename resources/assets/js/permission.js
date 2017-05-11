import './bootstrap.js';
import PermissionModal from './components/PermissionModal.vue';

new Vue({
    data: {
        roles: [],
        roleId: '',
    },

    components: {
        PermissionModal,
    },

    el: '#app',

    mounted() {
        this.getRoles();
    },

    methods: {
        getRoles() {
            this.$http.get('/roles').then(response => {
                this.roles = response.data.roles;
            });
        }
    }
});

