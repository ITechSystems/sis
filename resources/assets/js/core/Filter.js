export default class Filter {
    constructor(resource) {
        this.resource = resource;
        this.sortBy = '';
        this.direction = 'desc';
        this.filters = [];
    }

    add(filter, appendable = false) {
        if (! appendable) {
            this.filters = [];
            this.filters.push(filter);
            console.log(this);

            return;
        }

        // filters.forEach(filter => {
        //     let filterKey = this.key(filter);

        //     if (this.has(filterKey)) {
        //         this.get(filterKey)[filterKey] = filter[filterKey];
        //         return;
        //     }

        //     this.filters.push(filter);
        // });
    }

    order(sort) {
        this.sortBy = sort.sort_by;
        this.direction = sort.direction;
    }

    clear() {

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

            if (filter[key]) {
                queryString += `&${key}=${filter[key]}`;
            }
        });

        return `/${this.resource}?sort_by=${this.sortBy}&direction=${this.direction}${queryString}`;
    }

    key(filterObject) {
        return Object.keys(filterObject)[0];
    }
}
