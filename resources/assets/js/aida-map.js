import './bootstrap.js';
import Filter from './core/Filter.js';
import BuyerModal from './components/BuyerModal.vue';
import SortableHeader from './components/Filters/SortableHeader.vue';
import Search from './components/Filters/Search.vue';
import DeleteButton from './components/Buttons/DeleteButton.vue';

new Vue({
    el: '#app',

    components: {
        BuyerModal,
        SortableHeader,
        Search,
        DeleteButton,
    },

    data: {
        message: '',
        headers: [
            {column: 'id', name: 'Control #'},
            {column: '', name: 'Unit ID'},
            {column: '', name: 'Buyer'},
            {column: '', name: 'Agent'},
            {column: 'finance_type', name: 'Financing Type'},
            {column: 'created_at', name: 'Date Created'},
            {column: '', name: 'Actions'},
        ],
        searchables: [
            {column: 'id', name: 'Control #'},
            {column: 'unit', name: 'Unit ID'},
            {column: 'buyer', name: 'Buyer'},
            {column: 'agent', name: 'Agent'},
            {column: 'finance_type', name: 'Financing Type'},
            {column: 'created_at', name: 'Date Created'},
        ],
        aidaMaps: [],
        filter: new Filter('aida-maps'),
    },

    methods: {
        pdfLink(id) {
            return `/aida-maps/${id}/pdf`;
        },

        destroyLink(id) {
            return `/aida-maps/${id}`;
        },

        getAidaMaps() {
            this.$http.get(`/aida-maps`).then(response => {
                this.aidaMaps = response.data.aida_maps;
            });
        },

        processData(response) {
            this.message = response.data.message;
            this.hideMessage();
            this.getAidaMaps();
        },

        sendEmail(id) {
            document.getElementById('pdf-email').submit();

            this.$http.get(`/aida-maps/${id}/email`).then(response => {
                this.message = response.data.message;
                this.hideMessage();
            });
        },

        hideMessage() {
            setTimeout(() => {
                this.message = '';
            }, 1500);
        },

        addFilter(payload) {
            this.filter.add(payload);

            this.applyFilter();
        },

        applyOrder(payload) {
            this.filter.order(payload);

            this.applyFilter();
        },

        applyFilter() {
            this.filter.apply().then(response => {
                this.aidaMaps = response.data.aida_maps;
            });
        }
    }
});
