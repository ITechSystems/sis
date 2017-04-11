@extends("layouts.app")

@section("content")
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">Primary Info</div>

                    <div class="panel-body">
                        <div class="form-group">
                            <label for="project_type">Project Type</label>
                            <select class="form-control" name="project_type" id="project_type">
                                <option value="">Horizontal</option>
                                <option value="">Vertical</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @include("inventory._partials.buyer_information")
        @include("inventory._partials.unit_search_vertical")
        @include("inventory._partials.unit_search_horizontal")
        <div class="row">
            <div class="col-md-12 text-center">
                <button class="btn btn-primary">SEARCH UNITS</button>
                <button class="btn btn-default">RESET SEARCH</button>
            </div>
        </div>
    </div>
@endsection
