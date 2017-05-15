var path = require('path');
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.storagePath = function () {
    return path.dirname(__dirname) + '../storage';
}

Vue.prototype.$http = window.axios;

accounting.settings = {
    currency: {
        symbol: '',
        format: '%s%v',
        decimal: '.',
        thousand: ',',
        precision: 2,
    },
    number: {
        precision : 2,
        thousand: ',',
        decimal : '.',
    }
}

Vue.filter('diffForHumans', function (date) {
    return moment(date).fromNow();
});

Vue.filter('currency', function (number, symbol = '') {
    if (! symbol) {
        return accounting.formatMoney(number, symbol);
    }

    return accounting.formatMoney(number, {symbol: symbol,  format: '%s %v'});
});

Vue.filter('number', function (number, precision = 2) {
    return accounting.formatNumber(number, precision);
});
