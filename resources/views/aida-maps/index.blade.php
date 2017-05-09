@extends("layouts.app")

@section("content")
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default mb-0">
                <div class="panel-heading" style="display: flex; align-items: center; justify-content: space-between">
                    <span>AIDA MAPS</span>
                    <a  href="/aida-maps/create" class="btn btn-xs btn-primary">Create</a>
                </div>
                <div class="panel-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Control #</th>
                                <th>Unit ID</th>
                                <th>Buyer</th>
                                <th>Agent</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($aidaMaps as $aidaMap)
                                <tr>
                                    <td>{{ $aidaMap->id }}</td>
                                    <td>{{ $aidaMap->unit_id }}</td>
                                    <td>{{ $aidaMap->buyer->last_name }}, {{ $aidaMap->buyer->first_name }}</td>
                                    <td>{{ $aidaMap->user->name }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@section("js")

@endsection
