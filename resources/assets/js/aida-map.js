import './bootstrap.js';
import HorizontalFilters from './components/HorizontalFilters.vue';
import AidaMapModal from './components/AidaMapModal.vue';

new Vue({
    components: {
        HorizontalFilters,
        AidaMapModal,
    },

    data: {
        buyers: [],
        searchTerm: '',
        clientSearching: '',
        locations: [],
        units: [],
        result_count: 0,
        unitId: '',
    },

    el: '#app',

    methods: {
        getBuyers() {
            this.$http.get(`/buyers/all?search=${this.searchTerm}`).then(response => {
                this.buyers = response.data;
            });
        },

        displayResults(data) {
            this.result_count = data.result_count;
            this.units = data.units;
            this.locations = data.locations;
        },

        clearResults() {
            this.result_count = 0;
            this.units = '';
            this.locations = '';
        }
    }
});
