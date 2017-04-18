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
                            <th>Location</th>
                            <th>Project</th>
                            <th>Block and Lot</th>
                            <th>Price</th>
                            <th>Downpayment</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if(isset($units))
                            @foreach($units as $unit)
                            <tr>
                                <td><input type="checkbox" name=""></td>
                                <td>{{ $unit->location }}</td>
                                <td>{{ $unit->project }}</td>
                                <td>{{ $unit->block_lot }}</td>
                                <td>{{ number_format($unit->total_contract_price, 2) }}</td>
                                <td>{{ number_format($unit->downpayment->equity, 2) }}</td>
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
