<script>
    import Form from '../core/Form.js';

    export default {
        props: ['attributes'],

        data() {
            return {
                form: new Form({
                    last_name: this.attributes.last_name,
                    first_name: this.attributes.first_name,
                    middle_name: this.attributes.middle_name,
                    extension: this.attributes.extension,
                    contact_number: this.attributes.contact_number,
                    email: this.attributes.email,
                    password: '',
                }),
                message: '',
            }
        },

        methods: {
            save() {
                this.message = '';

                this.form.patch(`/users/${this.attributes.id}`)
                    .then(data => {
                        this.message = data.message;
                    })
                    .catch(error => {});
            },
        }
    }
</script>
