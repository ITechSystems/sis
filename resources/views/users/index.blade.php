@extends("layouts.app")

@section("content")
    <user-modal :user-id="userId" :action="action"></user-modal>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading" style="display: flex; align-items: center; justify-content: space-between">
                    <span>Users</span>
                    <a href="#" class="btn btn-xs btn-primary" data-toggle="modal" data-target="#user-modal" @click="action = 'create'">Create</a>
                </div>
                <div class="panel-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Contact</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users">
                                <td>
                                    <a href="#" data-toggle="modal" data-target="#user-modal" @click="userId = user.id">
                                        @{{ user.id }}
                                    </a>
                                </td>
                                <td>@{{ user.first_name }}</td>
                                <td>@{{ user.last_name }}</td>
                                <td>@{{ user.contact_number }}</td>
                                <td>@{{ user.email }}</td>
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
