import './bootstrap.js';
import Filter from './core/Filter.js';
import BuyerModal from './components/BuyerModal.vue';
import SortableHeader from './components/Filters/SortableHeader.vue';

new Vue({
    components: {
        BuyerModal,
        SortableHeader,
    },

    data: {
        action: '',
        buyerId: '',
        buyers: [],
        headers: [
            { column: 'id', name: 'ID' },
            { column: 'last_name', name: 'Last Name' },
            { column: 'first_name', name: 'First Name' },
            { column: 'middle_name', name: 'Middle Name' },
            { column: 'extension', name: 'Extension' },
            { column: 'mobile', name: 'Mobile' },
            { column: 'email', name: 'Email' },
            { column: 'country', name: 'Country' },
            { column: 'agent', name: 'Added By' },
            { column: 'created_at', name: 'Date Added' },
            { column: '', name: 'Action' },
        ],
        filter: new Filter('buyers'),
        searchTerm: '',
    },

    el: '#app',

    methods: {
        getBuyers() {
            this.$http.get(`/buyers`).then(response => {
                this.buyers = response.data;
            });
        },

        setForm(buyerId, action) {
            this.action = action;
            this.buyerId = buyerId;
        },

        trash(buyerId) {
            this.$http.delete(`/buyers/${buyerId}`).then(response => {
                this.getBuyers();
            });
        },

        applyFilter(payload) {
            this.filter.add(payload);

            this.filter.apply().then(response => {
                this.buyers = response.data;
            });
        }
    }
});

