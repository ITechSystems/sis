<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Sales Information System</title>
    <link href="{{ asset('css/libs.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body class="skin-black">
    <div id="app">
        @include("layouts.nav")
        @include("layouts.sidebar")
        <div class="content-wrapper">
            <section class="content">
                @yield('content')
            </section>
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
