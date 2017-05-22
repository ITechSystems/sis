<template>
    <button type="button" class="btn btn-xs btn-danger" :disabled="loading" @click="trash">
        <slot name="text">
            <span v-html="content"></span>
        </slot>
    </button>
</template>

<script>
    export default {
        props: {
            'resource': {
                required: true,
            },

            'primaryKey': {
                required: true,
            },

            'text': {
                required: false,
                default: '<i class="fa fa-fw fa-trash"></i>',
            },
        },

        data() {
            return {
                content: this.text,
                originalContent: this.text,
                loading: false,
            }
        },

        methods: {
            trash() {
                let confirmed = confirm('Are you sure you want to DELETE?');

                if (confirmed) {
                    this.loading = true;
                    this.content = '<i class="fa fa-spinner fa-pulse fa-fw"></i>';

                    this.$http.delete(`/${this.resource}/${this.primaryKey}`).then(response => {
                        this.loading = false;
                        this.content = this.originalContent;

                        this.$emit('deleted', response);
                    });
                }
            },
        }
    }
</script>
