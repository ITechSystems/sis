import './bootstrap.js';
import AidaMapModal from './components/AidaMapModal.vue';
import PropertyInfo from './components/PropertyInformation.vue'
import HorizontalFilters from './components/HorizontalFilters.vue';

new Vue({
    data:{
        location: '',
        project: '',
        projects: [],
        blocks: [],
        data: [],
        items: [],
        unit_id: '',
        result_count: 0,
        locations: [],
        units: [],
        block_lot: ''
    },

    components: {
        AidaMapModal,
        PropertyInfo,
        HorizontalFilters
    },

    el: '#app',

    computed() {
    },

    mounted() {
    },

    methods: {
        getProjectsByLocation(location){
            this.$http.get('/search/getProjectsByLocation?location=' + location).then(res => {
                this.projects = res.data
            })
        },

        getBlocksByLocation(project){
            this.$http.get('/search/getBlocksByProject?project=' + project).then(res => {
                this.blocks = res.data
            })
        },

        showInfo(block_lot){
            this.block_lot = block_lot
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

