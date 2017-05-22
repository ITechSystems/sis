import './bootstrap.js';
import Filter from './core/Filter.js';
import BuyerModal from './components/BuyerModal.vue';
import SortableHeader from './components/Filters/SortableHeader.vue';
import Search from './components/Filters/Search.vue';
import DeleteButton from './components/Buttons/DeleteButton.vue';

new Vue({
    components: {
        BuyerModal,
        SortableHeader,
        Search,
        DeleteButton,
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
            { column: '', name: 'Added By' },
            { column: 'created_at', name: 'Date Added' },
            { column: '', name: 'Action' },
        ],
        filter: new Filter('buyers'),
    },

    el: '#app',

    methods: {
        setForm(buyerId, action) {
            this.action = action;
            this.buyerId = buyerId;
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
                this.buyers = response.data;
            });
        }
    }
});

