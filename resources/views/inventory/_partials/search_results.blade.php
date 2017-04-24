<div class="row">
    <div class="col-md-12">
        <div class="panel panel-default mb-0">
            <div class="panel-heading">
                @if(isset($result_count))
                    Search Results: {{ $result_count }} found.
                @endif
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
                        @if(isset($units))
                            @foreach($units as $unit)
                            <tr>
                                <td><input type="checkbox" name=""></td>
                                <td>{{ $unit->block_lot }}</td>
                                <td>{{ $unit->project }}</td>
                                <td>{{ number_format($unit->total_contract_price, 2) }}</td>
                                <td>{{ $unit->lot_area }}</td>
                                <td>{{ $unit->floor_area }}</td>
                                <td>{{ $unit->house_model }}</td>
                                <td></td>
                                <td>{{ $unit->lot_type }}</td>
                            </tr>
                            @endforeach
                        @endif
                    </tbody>
                </table>
                <div class="text-center">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#aida-map-modal">CREATE AIDA MAP</button>
                </div>
            </div>
        </div>
    </div>
</div>
