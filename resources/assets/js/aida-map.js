import './bootstrap.js';

new Vue({
    el: '#app',

    data: {
        message: '',
        aidaMaps: [],
    },

    mounted() {
        this.getAidaMaps();
    },

    methods: {
        getAidaMaps() {
            this.$http.get(`/aida-maps`).then(response => {
                this.aidaMaps = response.data.aida_maps;
            });
        },

        pdfLink(id) {
            return `/aida-maps/${id}/pdf`;
        },

        destroyLink(id) {
            return `/aida-maps/${id}`;
        },

        trash(id) {
            this.$http.delete(`/aida-maps/${id}`).then(response => {
                this.message = response.data.message;
                this.hideMessage();
                this.getAidaMaps();
            });
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
