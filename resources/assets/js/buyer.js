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
    },

    el: '#app',

    mounted() {
        this.getBuyers();
    },

    methods: {
        getBuyers() {
            this.$http.get('/buyers/all').then(response => {
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

