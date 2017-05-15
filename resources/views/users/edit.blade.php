@extends("layouts.app")

@section("content")
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
                <div class="panel-heading" style="display: flex; align-items: center; justify-content: space-between">
                    <span>UPDATE PROFILE</span>
                </div>
                <div class="panel-body">
                    <user-edit :attributes="{{ $user }}" inline-template v-cloak>
                        <form id="buyerForm" class="container" @submit.prevent="save" @keydown="form.errors.clear($event.target.name)">
                            <div class="alert alert-success" v-if="message">
                                @{{ message }}
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="last_name">Last Name</label>
                                                <span class="text-danger" v-if="form.errors.has('last_name')">@{{ form.errors.get('last_name') }}</span>
                                                <input type="text" class="form-control" name="last_name" id="last_name" v-model="form.last_name">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="first_name">First Name</label>
                                                <span class="text-danger" v-if="form.errors.has('first_name')">@{{ form.errors.get('first_name') }}</span>
                                                <input type="text" class="form-control" name="first_name" id="first_name" v-model="form.first_name">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="middle_name">Middle Name</label>
                                                <span class="text-danger" v-if="form.errors.has('middle_name')">@{{ form.errors.get('middle_name') }}</span>
                                                <input type="text" class="form-control" name="middle_name" id="middle_name" v-model="form.middle_name">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label for="extension">Extension</label>
                                                <span class="text-danger" v-if="form.errors.has('name')">@{{ form.errors.get('extension') }}</span>
                                                <input type="text" class="form-control" name="extension" id="extension" v-model="form.extension">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="contact_number">Contact Number</label>
                                                <span class="text-danger" v-if="form.errors.has('contact_number')">@{{ form.errors.get('contact_number') }}</span>
                                                <input type="text" class="form-control" name="contact_number" id="contact_number" v-model="form.contact_number">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="email">Email</label>
                                                <span class="text-danger" v-if="form.errors.has('email')">@{{ form.errors.get('email') }}</span>
                                                <input type="text" class="form-control" name="email" id="email" v-model="form.email">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="password">Password</label>
                                                <span class="text-danger" v-if="form.errors.has('password')">@{{ form.errors.get('password') }}</span>
                                                <input type="password" class="form-control" name="password" id="password" v-model="form.password">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <hr>
                                    <button class="btn btn-primary btn-sm">Save</button>
                                </div>
                            </div>
                        </form>
                    </user-edit>
                </div>
            </div>
        </div>
    </div>
@endsection

@section("js")
    <script src="{{ asset('js/user-edit.js') }}"></script>
@endsection
