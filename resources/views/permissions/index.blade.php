@extends("layouts.app")

@section("content")
    <permission-modal :role-id="roleId"></permission-modal>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Roles
                </div>
                <div class="panel-body">
                    <table class="table table-hover">
                        <tbody>
                            <tr v-for="role in roles">
                                <td>
                                    <a href="#"  data-toggle="modal" data-target="#permission-modal" @click="roleId = role.id">
                                        @{{ role.name }}
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
    <script src="/js/permission.js"></script>
@endsection
