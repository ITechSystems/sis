import './bootstrap.js';
import Filter from './core/Filter.js';
import UserModal from './components/UserModal.vue';
import SortableHeader from './components/Filters/SortableHeader.vue';
import Search from './components/Filters/Search.vue';

new Vue({
    components: {
        UserModal,
        SortableHeader,
        Search,
    },

    data: {
        action: '',
        userId: '',
        users: [],
        headers: [
            { column: 'id', name: 'ID' },
            { column: 'last_name', name: 'Last Name' },
            { column: 'first_name', name: 'First Name' },
            { column: 'middle_name', name: 'Middle Name' },
            { column: 'extension', name: 'Extension' },
            { column: 'mobile', name: 'Mobile' },
            { column: 'email', name: 'Email' },
            { column: '', name: 'Action' },
        ],
        filter: new Filter('users'),
    },

    el: '#app',

    methods: {
        editLink(id) {
            return `/users/${id}/edit`;
        },

        setForm(userId, action) {
            this.action = action;
            this.userId = userId;
        },

        trash(userId) {
            this.$http.delete(`/users/${userId}`).then(response => {
                this.getUsers();
            });
        },

        addFilter(payload) {
            this.filter.add(payload);

            this.applyFilter();
        },

        applyOrder(payload) {
            this.filter.order(payload);

            this.applyFilter();
        },

        applyFilter(payload) {
            this.filter.apply().then(response => {
                this.users = response.data.users;
            });
        }
    }
});

