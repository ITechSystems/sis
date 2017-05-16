@extends("layouts.app")

@section("content")
    <buyer-modal :buyer-id="buyerId" :action="action" @saved="getBuyers"></buyer-modal>
    <div class="container" v-cloak>
        <div class="row">
            <div class="col-md-offset-2 col-md-8">
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
        <div class="row" v-for="buyer in buyers">
            <div class="col-md-offset-2 col-md-8">
                <div class="panel panel-default buyer-tile">
                    <div class="panel-heading">
                        <p class="buyer-id">
                            <span class="buyer-tile-hash">#</span> @{{ buyer.id }}
                        </p>
                        <p class="buyer-created_at">
                            added <span class="time">@{{ buyer.created_at | diffForHumans }}</span>
                        </p>
                    </div>
                    <div class="panel-body">
                        <p class="buyer-name">@{{ buyer.last_name }}, @{{ buyer.first_name }} @{{ buyer.middle_name }} @{{ buyer.extension }}</p>
                        <p class="buyer-contact_number"><i class="fa fa-phone fa-fw"></i> @{{ buyer.mobile }}</p>
                        <p class="buyer-email"><i class="fa fa-envelope fa-fw"></i> @{{ buyer.email }}</p>
                        <p class="buyer-country"><i class="fa fa-map-marker fa-fw"></i> @{{ buyer.country }}</p>
                        <p class="buyer-agent"><i class="fa fa-user fa-fw"></i> Added by @{{ buyer.agent.first_name }} @{{ buyer.agent.last_name }}</p>
                    </div>
                    <div class="panel-footer buyer-tile-footer">
                        <div class="text-right">
                            <button class="btn btn-default btn-xs" data-toggle="modal" data-target="#buyer-modal" @click="setForm(buyer.id, 'edit')">
                                <i class="fa fa-pencil fa-fw"></i> Edit
                            </button>
                            <button class="btn btn-default btn-xs" data-toggle="modal" data-target="#buyer-modal" @click="setForm(buyer.id, 'show')">
                                <i class="fa fa-eye fa-fw"></i> Details
                            </button>
                            <button class="btn btn-danger btn-xs" @click="trash(buyer.id)">
                                <i class="fa fa-trash fa-fw"></i> Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section("js")
    <script src="{{ asset('js/buyer.js') }}"></script>
@endsection
