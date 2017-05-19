@extends("layouts.app")

@section("content")
    <user-modal :user-id="userId" :action="action"></user-modal>
    <div class="container" v-cloak>
        <div class="row">
            <div class="col-md-12">
                <div class="box">
                    <div class="row">
                        <div class="col-md-10">
                            <search :searchables="headers" @searched="addFilter"></search>
                        </div>
                        @can('create', 'App\User')
                            <div class="col-md-2">
                                <a href="#" class="btn btn-md btn-primary btn-block" data-toggle="modal" data-target="#user-modal" @click="action = 'create'">
                                    <i class="fa fa-user-plus"></i> ADD USER
                                </a>
                            </div>
                        @endcan
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
                            <tr v-for="user in users">
                                <td>@{{ user.id }}</td>
                                <td>@{{ user.first_name }}</td>
                                <td>@{{ user.last_name }}</td>
                                <td>@{{ user.middle_name }}</td>
                                <td>@{{ user.extension }}</td>
                                <td>@{{ user.mobile }}</td>
                                <td>@{{ user.email }}</td>
                                <td>
                                    <a class="btn btn-default btn-xs" :href="editLink(user.id)">
                                        <i class="fa fa-pencil"></i> Edit
                                    </a>
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
    <script src="/js/user.js"></script>
@endsection
