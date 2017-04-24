const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// if (mix.inProduction) {
//     mix.options({ purifyCss: true });
// }

mix.styles([
        'resources/assets/css/libs/AdminLTE.min.css',
        'resources/assets/css/libs/skins/_all-skins.min.css'
    ], 'public/css/libs.css')
    .sass('resources/assets/sass/app.sass', 'public/css')
    .scripts([
        'resources/assets/js/libs/moment.js',
        'resources/assets/js/libs/jquery.min.js',
        // 'resources/assets/js/libs/jquery-ui.min.js',
        // 'resources/assets/js/libs/app.js',
        'resources/assets/js/libs/tether.min.js',
        'resources/assets/js/libs/bootstrap.min.js',
        'resources/assets/js/libs/AdminLTE.min.js',
        'resources/assets/js/libs/vue.js',
        'resources/assets/js/libs/axios.min.js'
    ], 'public/js/app.js')
    .js('resources/assets/js/inventory.js', 'public/js')
    .js('resources/assets/js/buyer.js', 'public/js')
    .js('resources/assets/js/aida-map.js', 'public/js');
