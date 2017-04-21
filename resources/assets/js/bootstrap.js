window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.prototype.$http = window.axios;

Vue.filter('diffForHumans', function (date) {
    return moment(date).fromNow();
});
