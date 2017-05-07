@extends("layouts.app")

@section("content")
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
                </form>
            </div>
        </div>
    </div>
    <div class="row" v-for="buyer in buyers" v-if="! clientSearching || buyer.id == clientSearching.id">
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
                    <p class="buyer-contact_number"><i class="fa fa-phone fa-fw"></i> @{{ buyer.contact_number }}</p>
                    <p class="buyer-email"><i class="fa fa-envelope fa-fw"></i> @{{ buyer.email }}</p>
                    <p class="buyer-country"><i class="fa fa-map-marker fa-fw"></i> @{{ buyer.country }}</p>
                    <p class="buyer-agent"><i class="fa fa-user fa-fw"></i> Added by @{{ buyer.agent.name }}</p>
                </div>
                <div class="panel-footer buyer-tile-footer">
                    <div class="text-right">
                        <button class="btn btn-primary btn-xs" @click="clientSearching = buyer" v-if="! clientSearching">
                            <i class="fa fa-search fa-fw"></i> Search unit/s for this customer
                        </button>
                        <button class="btn btn-default btn-xs" @click="clientSearching = ''" v-if="clientSearching">
                            <i class="fa fa-search fa-arrow-left"></i> Back to search results
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <horizontal-filters v-if="clientSearching" @search="displayResults" @reset="clearResults"></horizontal-filters>
    <div class="row" v-if="clientSearching && result_count">
        <div class="col-md-12">
            <div class="panel panel-default mb-0">
                <div class="panel-heading">
                    Search Results: <span>@{{ result_count }}</span> found.
                </div>
                <div class="panel-body">
                    <table class="table table-hovered table-condense">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Unit ID</th>
                                <th>Phase</th>
                                <th>Lot(sqm)</th>
                                <th>Floor(sqm)</th>
                                <th>Model</th>
                                <th>Lot_orientation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="unit in units">
                                <td><input type="checkbox" name="" @click="unitId = unit.block_lot"></td>
                                <td>@{{ unit.block_lot }}</td>
                                <td>@{{ unit.phase }}</td>
                                <td>@{{ unit.lot_area }}</td>
                                <td>@{{ unit.floor_area }}</td>
                                <td>@{{ unit.house_model }}</td>
                                <td>@{{ unit.lot_type }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-center">
                        <button class="btn btn-primary" data-toggle="modal" data-target="#aida-map-modal">
                            CREATE AIDA MAP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <aida-map-modal :unit-id="unitId" :buyer-id="clientSearching.id"></aida-map-modal>
@endsection

@section("js")
    <script src="{{ asset('js/aida-map.js') }}"></script>
@endsection
