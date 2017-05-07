<template>
    <modal id="property_info">
        <h4 slot="header" class="modal-title">
            {{ items.block_lot }}
        </h4>
        <div class="container">
            <div class="row">
                <p class="heading">Unit Details</p>
                <div class="col-md-8">
                    <img src="/img/house.jpg" alt="" class="unit-full">
                </div>
                <div class="col-md-4">
                    <table class="table">
                        <tbody v-for="(item, index) in items" v-if="index == 0">
                            <tr>
                                <th>Unit ID</th>
                                <td>{{ item.block_lot }}</td>
                            </tr>
                            <tr>
                                <th>Lot Area</th>
                                <td>{{ item.lot_area }}</td>
                            </tr>

                            <tr>
                                <th>Lot Type</th>
                                <td>{{ item.lot_type }}</td>
                            </tr>
                            <tr>
                                <th>Floor Area</th>
                                <td>{{ item.floor_area }}</td>
                            </tr>
                            <tr>
                                <th>House Model</th>
                                <td>{{ item.house_model }}</td>
                            </tr>
                            <tr>
                                <th>Reservation Fee</th>
                                <td>{{ item.reservation_fee | currency }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <table class="table" v-for="(item, index) in items">
                        <tr v-for="(loan, index1) in item.loans">
                            <th v-if="index1 == 0" colspan="3">Finance Type</th>
                            <th v-if="index1 == 0">Price</th>
                        </tr>
                        <tr v-for="(loan, index1) in item.loans">
                            <td v-if="index1 == 0" colspan="3">{{ loan.finance_type }}</td>
                            <td v-if="index1 == 0">{{ item.total_contract_price | currency }}</td>
                        </tr>
                        <tr>
                            <td><br></td>
                            <td><br></td>
                            <td><br></td>
                            <td><br></td>
                            <td><br></td>
                            <td><br></td>
                            <td><br></td>
                        </tr>
                        <tr>
                            <th>Loan Total</th>
                            <th>MRI</th>
                            <th>Monthly Amortization</th>
                            <th>Loan Percentage</th>
                            <th>Description</th>
                            <th>Monthly Percentage</th>
                            <th>Years</th>
                        </tr>
                        <tbody>
                            <tr v-for="loan in item.loans">
                                <td>{{ loan.total | currency }}</td>
                                <td>{{ loan.mri | currency }}</td>
                                <td>{{ loan.monthly_amortization | currency }}</td>
                                <td>{{ loan.percentage }}</td>
                                <td>{{ loan.description }}</td>
                                <td>{{ loan.monthly_percentage | currency }}</td>
                                <td>{{ loan.years }}</td>
                            </tr>
                        </tbody>
                        <tr>
                            <td colspan="7"><hr></td>
                        </tr>
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
