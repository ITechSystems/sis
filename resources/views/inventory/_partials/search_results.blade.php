<div class="row" v-cloak>
    <div class="col-md-12">
        <div class="panel panel-default mb-0">
            <div class="panel-heading">
                <p v-if="result_count > 0">Search Results: <span>@{{ result_count }}</span> found.</p>

                <p v-if="result_count == 0">No record found.</p>

                <p v-if="result_count == -1"></p>
            </div>
            <div class="panel-body" v-if="result_count != -1">
                <table class="table table-hovered table-condense">
                    <thead>
                        <tr>
                            <th>Unit ID</th>
                            <th>Zone</th>
                            <th>Phase</th>
                            <th>Lot(sqm)</th>
                            <th>Floor(sqm)</th>
                            <th>Model</th>
                            <th>Lot Orientation</th>
                            <th>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="unit in units">
                            <td>
                                <a href="#" data-toggle="modal" data-target="#property_info" role="button" v-on:click="showInfo(unit.block_lot)">@{{ unit.block_lot }}</a>
                            </td>
                            <td>@{{ unit.zone }}</td>
                            <td>@{{ unit.phase }}</td>
                            <td>@{{ unit.lot_area }}</td>
                            <td>@{{ unit.floor_area }}</td>
                            <td>@{{ unit.house_model }}</td>
                            <td>@{{ unit.lot_type }}</td>
                            <td>@{{ unit.date }}</td>
                        </tr>
                    </tbody>
                </table>

            <property-info :block-lot="block_lot"></property-info>
            </div>
        </div>
    </div>
</div>
