import './bootstrap.js';
import DeleteButton from './components/Buttons/DeleteButton.vue';

new Vue({
    el: '#app',

    components: {
        DeleteButton,
    },

    data: {
        message: '',
        aidaMaps: [],
    },

    mounted() {
        this.getAidaMaps();
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
        }
    }
});
