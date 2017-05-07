import Error from './Error.js';

export default class Form {
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Error;
    }

    data() {
        let data = {};

        for (let field in this.originalData) {
            data[field] = this[field];
        }

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    get(url) {
        return this.submit('get', url);
    }

    post(url) {
        return this.submit('post', url);
    }

    patch(url) {
        return this.submit('patch', url);
    }

    delete(url) {
        return this.submit('delete', url);
    }

    submit(request, url) {
        return new Promise((resolve, reject) => {
            axios[request](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                }).catch(error => {
                    this.onFail(error.response.data);

                    reject(error.response.data);
                });
        });
    }

    onSuccess(response) {
        this.errors.clear();
    }

    onFail(errors) {
        this.errors.record(errors);
    }
}
