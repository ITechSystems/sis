import './bootstrap.js';
import BuyerModal from './components/BuyerModal.vue';

new Vue({
    components: {
        BuyerModal,
    },

    data: {
        action: '',
        buyerId: '',
        buyers: [],
        searchTerm: '',
    },

    el: '#app',

    mounted() {
        this.getBuyers();
    },

    methods: {
        getBuyers() {
            this.$http.get(`/buyers/all?search=${this.searchTerm}`).then(response => {
                this.buyers = response.data;
            })
        },

        setForm(buyerId, action) {
            this.action = action;
            this.buyerId = buyerId;
        },

        trash(buyerId) {
            this.$http.delete(`/buyers/${buyerId}`).then(response => {
                this.getBuyers();
            });
        }
    }
});

