@extends("layouts.app")

@section("content")
<form action="/search/unit" method="POST">
    {{ csrf_field() }}
    <div class="container">
        {{-- @include("inventory._partials.buyer_information") --}}
        {{-- @include("inventory._partials.unit_search_vertical") --}}
        @include("inventory._partials.unit_search_horizontal")
        <div class="row mb-20">
            <div class="col-md-12 text-center">
                <button class="btn btn-primary" name="search">SEARCH UNITS</button>
                <button class="btn btn-default">RESET SEARCH</button>
            </div>
        </div>
        @include("inventory._partials.search_results")
        <aida-map-modal></aida-map-modal>
    </div>
</form>
@endsection

@section("js")
    <script src="{{ asset('js/inventory.js') }}"></script>

    <!-- <script src="{{ asset('js/show_info.js') }}"></script> -->
@endsection
