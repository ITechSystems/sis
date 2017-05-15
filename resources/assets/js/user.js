import './bootstrap.js';
import UserModal from './components/UserModal.vue';

new Vue({
    components: {
        UserModal,
    },

    data: {
        action: '',
        userId: '',
        users: [],
        searchTerm: '',
    },

    el: '#app',

    mounted() {
        this.getUsers();
    },

    methods: {
        getUsers() {
            this.$http.get(`/users?search=${this.searchTerm}`).then(response => {
                this.users = response.data;
            })
        },

        setForm(userId, action) {
            this.action = action;
            this.userId = userId;
        },

        trash(userId) {
            this.$http.delete(`/users/${userId}`).then(response => {
                this.getUsers();
            });
        }
    }
});

