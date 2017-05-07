@extends("layouts.app")

@section("content")
<form action="/search/unit" method="POST">
    {{ csrf_field() }}
    <div class="container">
        <horizontal-filters @search="displayResults" @reset="clearResults"></horizontal-filters>

        @include("inventory._partials.search_results") 

        <aida-map-modal></aida-map-modal>
    </div>
</form>
@endsection

@section("js")
    <script src="{{ asset('js/inventory.js') }}"></script>
@endsection
