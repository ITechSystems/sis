<template>
    <thead>
        <tr>
            <th v-for="header in headers" @click="setOrder(header.column)">{{ header.name }}</th>
        </tr>
    </thead>
</template>

<script>
    export default {
        props: ['headers'],

        data() {
            return {
                currentColumn: '',
                previousColumn: '',
                direction: 'desc',
            }
        },

        mounted() {
            this.currentColumn = this.headers[0].column;
            this.previousColumn = this.headers[0].column;

            this.emitCurrentSorting();
        },

        methods: {
            setOrder(column) {
                this.previousColumn = this.currentColumn;
                this.currentColumn = column;

                if (this.previousColumn == this.currentColumn) {
                    if (this.direction == 'desc') this.direction = 'asc';
                    else this.direction = 'desc';
                }

                this.emitCurrentSorting();
            },

            emitCurrentSorting() {
                this.$emit('sorted', [{sort_by: this.currentColumn}, {direction: this.direction}]);
            },
        }
    }
</script>
