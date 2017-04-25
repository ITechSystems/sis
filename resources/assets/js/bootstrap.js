window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.prototype.$http = window.axios;

Vue.filter('diffForHumans', function (date) {
    return moment(date).fromNow();
});

accounting.settings = {
    currency: {
        symbol: '',   // default currency symbol is '$'
        format: '%s%v', // controls output: %s = symbol, %v = value/number (can be object: see below)
        decimal: '.',  // decimal point separator
        thousand: ',',  // thousands separator
        precision: 2   // decimal places
    },
    number: {
        precision : 2,  // default precision on numbers is 0
        thousand: ',',
        decimal : '.'
    }
}
