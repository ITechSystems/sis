import './bootstrap.js';
import AidaMapModal from './components/AidaMapModal.vue';

new Vue({
    data:{
        location: '',
        project: '',
        projects: [],
        blocks: []
    },

    components: {
        AidaMapModal,
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
        }
    }
});

