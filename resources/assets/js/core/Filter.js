export default class Filter {
    constructor(resource) {
        this.resource = resource;
        this.filters = [];
    }

    add(filters) {
        filters.forEach(filter => {
            let filterKey = this.key(filter);

            if (this.has(filterKey)) {
                this.get(filterKey)[filterKey] = filter[filterKey];
                return;
            }

            this.filters.push(filter);
        });
    }

    has(filterKey) {
        return !! this.filters.find(filter => {
            return filterKey == this.key(filter);
        });
    }

    get(filterKey) {
        return this.filters.find(filter => {
            return filterKey == this.key(filter);
        });
    }

    apply() {
        return new Promise((resolve, reject) => {
            axios.get(this.url()).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error.response.data);
            });
        });
    }

    url() {
        let queryString = '';

        this.filters.forEach(filter => {
            let key = this.key(filter);

            queryString += `&${key}=${filter[key]}`;
        });

        queryString = queryString.replace('&', '?');

        return `/${this.resource}${queryString}`;
    }

    key(filterObject) {
        return Object.keys(filterObject)[0];
    }
}
