@extends("layouts.app")

@section("content")
    <buyer-modal :buyer-id="buyerId" :action="action" @saved=""></buyer-modal>
    <div class="container" v-cloak>
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="row">
                        <div class="col-md-10">
                            <search :searchables="headers" @searched="addFilter"></search>
                        </div>
                        <div class="col-md-2">
                            <button type="button" class="btn btn-md btn-primary btn-block" data-toggle="modal" data-target="#buyer-modal" @click="setForm('', 'create')">
                                <i class="fa fa-user-plus"></i> ADD BUYER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <table class="table table-hover table-striped table-bordered mb-0">
                        <thead is="sortable-header" :headers="headers" @sorted="applyOrder"></thead>
                        <tbody>
                            <tr v-for="buyer in buyers">
                                <td>@{{ buyer.id }}</td>
                                <td>@{{ buyer.last_name }}</td>
                                <td>@{{ buyer.first_name }}</td>
                                <td>@{{ buyer.middle_name }}</td>
                                <td>@{{ buyer.extension }}</td>
                                <td>@{{ buyer.mobile }}</td>
                                <td>@{{ buyer.email }}</td>
                                <td>@{{ buyer.country }}</td>
                                <td>@{{ buyer.agent.first_name }} @{{ buyer.agent.last_name }}</td>
                                <td>@{{ buyer.created_at }}</td>
                                <td>
                                    <button class="btn btn-default btn-xs" data-toggle="modal" data-target="#buyer-modal" @click="setForm(buyer.id, 'edit')">
                                        <i class="fa fa-pencil fa-fw"></i> Edit
                                    </button>
                                    <button class="btn btn-default btn-xs" data-toggle="modal" data-target="#buyer-modal" @click="setForm(buyer.id, 'show')">
                                        <i class="fa fa-eye fa-fw"></i> Details
                                    </button>
                                    <button class="btn btn-danger btn-xs" @click="trash(buyer.id)">
                                        <i class="fa fa-trash fa-fw"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@section("js")
    <script src="{{ asset('js/buyer.js') }}"></script>
@endsection
