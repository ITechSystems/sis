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
                                <th>Financing Type</th>
                                <th>Date Created</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($aidaMaps as $aidaMap)
                                <tr>
                                    <td>{{ $aidaMap->id }}</td>
                                    <td>{{ $aidaMap->unit->block_lot }}</td>
                                    <td>{{ $aidaMap->buyer->first_name }} {{ $aidaMap->buyer->last_name }}</td>
                                    <td>{{ $aidaMap->user->first_name }} {{ $aidaMap->user->last_name }}</td>
                                    <td>{{ $aidaMap->finance_type }}</td>
                                    <td>{{ $aidaMap->created_at->format('M d, Y') }}</td>
                                    <td>
                                        <button class="btn btn-info btn-xs">View</button>
                                        <a href="/aida-maps/{{ $aidaMap->id }}/pdf" target="_blank" class="btn btn-warning btn-xs">PDF</a>
                                        <button class="btn btn-success btn-xs">Email</button>
                                        <button class="btn btn-danger btn-xs">Delete</button>
                                    </td>
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
