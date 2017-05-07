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
                <button class="btn btn-primary" type="submit" form="aida-map-form" v-if="financingType">Save</button>
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
                coordinate: {
                    x: '',
                    y: '',
                },
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

            // recordPoints(coordinate) {
            //     this.coordinate.x = coordinate.x;
            //     this.coordinate.y = coordinate.y;
            // },

            // save() {
            //     this.$http.post(`/aida-maps`, {
            //         'point_x': this.coordinate.x,
            //         'point_y': this.coordinate.y,
            //         'unit_id': this.unitId,
            //     }).then(response => {
            //         this.message = response.data.message
            //     });
            // }
        },

        watch: {
            unitId() {
                this.$http.get(`/search/unitById/${this.unitId}`).then(response => {
                        this.units = response.data;
                    }).catch(error => {
                        console.log(error);
                    });

                // this.$http.get(`/aida-maps/${this.unitId}`).then(response => {
                //         this.aidaMap = response.data.aida_map;
                //         this.coordinate.x = response.data.aida_map.point_x;
                //         this.coordinate.y = response.data.aida_map.point_y;
                //     }).catch(error => {
                //         console.log(error);
                //     });
            },

            buyerId() {
                this.$http.get(`/buyers/${this.buyerId}`).then(response => {
                        this.buyer = response.data.buyer;
                    }).catch(error => {
                        console.log(error);
                    });
            }
        }
    }
</script>
