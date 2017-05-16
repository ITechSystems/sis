<template>
    <modal id="aida-map-modal">
        <h4 slot="header" class="modal-title">AIDA Map</h4>
        <div class="alert alert-success" v-if="message">
            {{ message }}
        </div>
        <financing-selection :financing-types="financingTypes" @selected="getFinancingType" v-if="! financingType"></financing-selection>
        <aida-map-info :unit="unit" :buyer="buyer" :financing-type="financingType" v-if="financingType"></aida-map-info>
        <p slot="footer" class="footer-note">
            <span>
                Date and time generated.
                <strong>Price are subject to change without prior notice.</strong>
            </span>
            <span>
                <button class="btn btn-default" type="button" data-dismiss="modal" @click="message = ''">Close</button>
                <button class="btn btn-default" type="button" @click="financingType = ''" v-if="financingType">Back</button>
                <button class="btn btn-primary" type="button" @click="save" v-if="financingType">Save</button>
            </span>
        </p>
    </modal>
</template>

<script>
    import Modal from '../../components/Modal.vue';
    import FinancingSelection from './FinancingSelection.vue';
    import AidaMapInfo from './Info.vue';

    export default {
        components: {
            Modal,
            FinancingSelection,
            AidaMapInfo,
        },

        props: ['unitId', 'buyerId'],

        data() {
            return {
                message: '',
                download: '',
                aidaMap: {},
                buyer: {},
                units: [],
                financingType: '',
            }
        },

        computed: {
            financingTypes() {
                let financingTypes = [];

                this.units.forEach(unit => {
                    unit.loans.forEach(loan => {
                        financingTypes.push(loan.finance_type);
                    });
                });

                return Array.from(new Set(financingTypes));
            },

            unit() {
                return this.units.find(unit => {
                    return unit.loans.find(loan => {
                        return loan.finance_type == this.financingType;
                    });
                })
            }
        },

        methods: {
            getFinancingType(payload) {
                this.financingType = payload;
            },

            save() {
                this.$http.post(`/aida-maps`, {
                    'unit_id': this.unit.id,
                    'buyer_id': this.buyerId,
                    'finance_type': this.financingType,
                }).then(response => {
                    window.location = '/aida-maps';
                });
            }
        },

        watch: {
            unitId() {
                this.$http.get(`/search/unitById/${this.unitId}`).then(response => {
                        this.units = response.data;
                    }).catch(error => {
                        console.log(error);
                    });
            },

            buyerId() {
                this.$http.get(`/buyers/${this.buyerId}`).then(response => {
                        this.buyer = response.data.buyer;
                    }).catch(error => {
                        console.log(error);
                    });
            },
        }
    }
</script>
