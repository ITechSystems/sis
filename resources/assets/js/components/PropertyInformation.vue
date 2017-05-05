<template>
    <modal id="property_info">
        <h4 slot="header" class="modal-title">
            {{ items.block_lot }}
        </h4>
        <div class="container">
            <div class="row">
                <p class="heading">Unit Details</p>
                <div class="col-md-6">
                    <img src="/img/user7-128x128.jpg" alt="" class="unit-full">
                </div>
                <div class="col-md-6">
                    <table class="table">
                        <tbody v-for="(item, index) in items" v-if="index == 0">
                            <tr>
                                <td>Unit ID</td>
                                <td>{{ item.block_lot }}</td>
                            </tr>
                            <tr>
                                <td>Lot Area</td>
                                <td>{{ item.lot_area }}</td>
                            </tr>

                            <tr>
                                <td>Lot Type</td>
                                <td>{{ item.lot_type }}</td>
                            </tr>
                            <tr>
                                <td>Floor Area</td>
                                <td>{{ item.floor_area }}</td>
                            </tr>
                            <tr>
                                <td>House Model</td>
                                <td>{{ item.house_model }}</td>
                            </tr>
                            <tr>
                                <td>Reservation Fee</td>
                                <td>{{ item.reservation_fee | currency }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <p class="heading">Loan</p>
                <div class="col-md-12">
                    <table class="table" v-for="(item, index) in items">
                        <thead>
                            <tr>
                                <th>Finance Type</th>
                                <th>Price</th>
                                <th>Loan Total</th>
                                <th>MRI</th>
                                <th>Monthly Amortization</th>
                                <th>Loan Percentage</th>
                                <th>Description</th>
                                <th>Monthly Percentage</th>
                                <th>Years</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="loan in item.loans">
                                <td>{{ loan.finance_type }}</td>
                                <td>{{ item.total_contract_price | currency }}</td>
                                <td>{{ loan.total | currency }}</td>
                                <td>{{ loan.mri | currency }}</td>
                                <td>{{ loan.monthly_amortization | currency }}</td>
                                <td>{{ loan.percentage }}</td>
                                <td>{{ loan.description }}</td>
                                <td>{{ loan.monthly_percentage | currency }}</td>
                                <td>{{ loan.years }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <span slot="footer">
            <button class="btn btn-default" type="button" data-dismiss="modal">Close</button>
        </span>
    </modal>
</template>

<script>
    import Modal from './Modal.vue';

    export default {
        components: {
            Modal
        },

        props: [
            'blockLot'
        ],

        data(){
            return {
                items: []
            }
        },

        watch: {
            blockLot(){
                this.items = []
                this.$http.get(`/search/unitById/${this.blockLot}`).then(res => {
                    this.items = res.data
                });
            }
        }
    }
</script>
