@extends("layouts.app")

@section("content")
    <buyer-modal :buyer-id="buyerId" :action="action" @saved="getBuyers"></buyer-modal>
    <div class="container" v-cloak>
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <form class="form-inline text-center" @submit.prevent="getBuyers">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="searchTerm" title="Search Term">
                        </div>
                        <button type="submit" class="btn btn-md btn-default">
                            <i class="fa fa-search"></i> SEARCH
                        </button>
                        <button type="button" class="btn btn-md btn-primary" data-toggle="modal" data-target="#buyer-modal" @click="setForm('', 'create')">
                            <i class="fa fa-user-plus"></i> ADD BUYER
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <table class="table table-hover table-striped table-bordered mb-0">
                        <thead is="sortable-header" :headers="headers" @sorted="applyFilter">
                        </thead>
                        <tbody v-for="buyer in buyers">
                            <tr>
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
