@extends("layouts.app")

@section("content")
    <div class="row">
        <div class="col-md-offset-2 col-md-8">
            <div class="box">
                <form class="form-inline text-center">
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="searchTerm" title="Search Term">
                    </div>
                    <button type="button" class="btn btn-md btn-default" @click="getBuyers">
                        <i class="fa fa-search"></i> SEARCH
                    </button>
                </form>
            </div>
        </div>
    </div>
    <div class="row" v-for="buyer in buyers">
        <div class="col-md-offset-2 col-md-8" v-if="clientSearching == '' || clientSearching.id == buyer.id">
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
                    <p class="buyer-name">@{{ buyer.name }}</p>
                    <p class="buyer-contact_number"><i class="fa fa-phone fa-fw"></i> @{{ buyer.contact_number }}</p>
                    <p class="buyer-email"><i class="fa fa-envelope fa-fw"></i> @{{ buyer.email }}</p>
                    <p class="buyer-country"><i class="fa fa-map-marker fa-fw"></i> @{{ buyer.country }}</p>
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
                                <th>Price</th>
                                <th>Lot(sqm)</th>
                                <th>Floor(sqm)</th>
                                <th>Model</th>
                                <th>House Type</th>
                                <th>Lot_orientation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="unit in units">
                                <td><input type="checkbox" name=""></td>
                                <td>@{{ unit.block_lot }}</td>
                                <td>@{{ unit.project }}</td>
                                <td>@{{ unit.total_contract_price }}</td>
                                <td>@{{ unit.lot_area }}</td>
                                <td>@{{ unit.floor_area }}</td>
                                <td>@{{ unit.house_model }}</td>
                                <td></td>
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
    <aida-map-modal></aida-map-modal>
@endsection

@section("js")
    <script src="{{ asset('js/aida-map.js') }}"></script>
@endsection
