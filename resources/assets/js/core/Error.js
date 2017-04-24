export default class Error {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    clear(field) {
        if (! field) {
            this.errors = {};

            return;
        }
        delete this.errors[field];
    }

    record(errors) {
        this.errors = errors;
    }

    has(field) {
        return !! this.errors[field];
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }
}
