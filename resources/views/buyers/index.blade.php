@extends("layouts.app")

@section("content")
    <buyer-modal :buyer-id="buyerId" :action="action" @saved="getBuyers"></buyer-modal>
    <button type="button" data-toggle="modal" data-target="#buyer-modal" @click="setForm('', 'create')">
        <i class="fa fa-user-plus"></i> Add Buyer
    </button>
    <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="buyer in buyers">
                <td>@{{ buyer.id }}</td>
                <td>@{{ buyer.name }}</td>
                <td>
                    <button type="button" data-toggle="modal" data-target="#buyer-modal" @click="setForm(buyer.id, 'edit')">
                        <i class="fa fa-pencil"></i> Edit
                    </button>
                    <button type="button" data-toggle="modal" data-target="#buyer-modal" @click="setForm(buyer.id, 'show')">
                        <i class="fa fa-eye-open"></i> Show
                    </button>
                    <button type="button" @click="trash(buyer.id)">
                        <i class="fa fa-trash"></i> Delete
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
@endsection

@section("js")
    <script src="{{ asset('js/buyer.js') }}"></script>
@endsection
