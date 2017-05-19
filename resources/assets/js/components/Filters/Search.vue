<template>
    <form class="form-inline" @submit.prevent="emitSearchValues">
        <div class="form-group">
            <select class="form-control" v-model="searchColumn">
                <option v-for="searchable in searchables" v-if="searchable.column" :value="searchable.column">
                    {{ searchable.name }}
                </option>
            </select>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="searchTerm" title="Search Term">
        </div>
        <button type="submit" class="btn btn-md btn-default">
            <i class="fa fa-search"></i> SEARCH
        </button>
    </form>
</template>

<script>
    export default {
        props: ['searchables'],

        data() {
            return {
                searchColumn: this.searchables[0].column,
                searchTerm: '',
            }
        },

        methods: {
            emitSearchValues() {
                this.$emit('searched', {[this.searchColumn]: this.searchTerm})
            }
        }
    }
</script>
