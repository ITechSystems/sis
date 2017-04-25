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
                        <tbody>
                            <tr>
                                <td>Unit ID</td>
                                <td>{{ items.block_lot }}</td>
                            </tr>
                            <tr>
                                <td>Lot Area</td>
                                <td>{{ items.lot_area }}</td>
                            </tr>

                            <tr>
                                <td>Lot Type</td>
                                <td>{{ items.lot_type }}</td>
                            </tr>
                            <tr>
                                <td>Floor Area</td>
                                <td>{{ items.floor_area }}</td>
                            </tr>
                            <tr>
                                <td>House Model</td>
                                <td>{{ items.house_model }}</td>
                            </tr>
                            <tr>
                                <td>Total Contract Price</td>
                                <td>{{ items.total_contract_price }}</td>
                            </tr>
                            <tr>
                                <td>Reservation Fee</td>
                                <td>{{ items.reservation_fee }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <p class="heading">Loan</p>
                <div class="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Total</th>
                                <th>MRI</th>
                                <th>Monthly Amortization</th>
                                <th>Loan Percentage</th>
                                <th>Description</th>
                                <th>Monthly Percentage</th>
                                <th>Years</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="loan in items.loans">
                                <td>{{ loan.total }}</td>
                                <td>{{ loan.mri }}</td>
                                <td>{{ loan.monthly_amortization }}</td>
                                <td>{{ loan.percentage }}</td>
                                <td>{{ loan.description }}</td>
                                <td>{{ loan.monthly_percentage }}</td>
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
            'unitId'
        ],

        data(){
            return {
                items: []
            }
        },

        watch: {
            unitId(){
                this.items = []
                this.$http.get(`/search/unitById/${this.unitId}`).then(res => {
                    this.items = res.data
                });
            }
        }
    }
</script>
