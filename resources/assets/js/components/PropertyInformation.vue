<template>
    <modal id="property_info">
        <h4 slot="header" class="modal-title">
            {{ items.block_lot }}
        </h4>
        <div class="container">
            <div class="row">
                <p class="heading">Unit Details</p>
                <div class="col-md-8">
                    <img :src="image_src" height="290" width="400"/>
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
                            <th v-if="index1 == 0">Loan<br> Percentage</th>
                            <th v-if="index1 == 0">Monthly<br> Percentage</th>
                        </tr>
                        <tr v-for="(loan, index1) in item.loans">
                            <td v-if="index1 == 0" colspan="3">{{ loan.finance_type }}</td>
                            <td v-if="index1 == 0">{{ item.total_contract_price | currency }}</td>
                            <td v-if="index1 == 0">{{ loan.percentage }}</td>
                            <td v-if="index1 == 0">{{ loan.monthly_percentage | currency }}</td>
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
                            <th>Loanable<br> Amount</th>
                            <th>MRI and Fire</th>
                            <th v-for="loan in item.loans">{{ loan.years }} years</th>
                        </tr>
                        <tr>
                            <td v-for="(loan, t_index) in item.loans" v-if="t_index == 0">{{ loan.total | currency }}</td>
                            <td v-for="(loan, m_index) in item.loans" v-if="m_index == 0">{{ loan.mri | currency }}</td>
                            <td v-for="loan in item.loans">{{ loan.monthly_amortization | currency }}</td>
                        </tr>
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
                items: [],
                house_model_name: '',
                image_src: '',
            }
        },

        watch: {
            blockLot(){
                this.items = []

                this.$http.get(`/search/unitById/${this.blockLot}`).then(res => {
                    this.items = res.data

                    this.house_model_name = this.items[0].house_model

                    this.getModel(this.house_model_name)
                });
            }
        },

        methods: {
            getModel(house_model){
                this.$http.get('/load/model/image?house_model=' + house_model).then(res => {
                    this.image_src = res.data
                })
            }
        }
    }
</script>
