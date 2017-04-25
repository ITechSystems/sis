import './bootstrap.js';
import AidaMapModal from './components/AidaMapModal.vue';
import PropertyInfo from './components/PropertyInformation.vue'

new Vue({
    data:{
        location: '',
        project: '',
        projects: [],
        blocks: [],
        data: [],
        items: [],
        unit_id: ''
    },

    components: {
        AidaMapModal,
        PropertyInfo
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

        showInfo(id){
            this.unit_id = id
        }
    }
});

