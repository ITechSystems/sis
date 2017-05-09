<template>
    <form>
        <p>Please select a financing type to proceed.</p>
        <div class="form-group">
            <select class="form-control" v-model="financingType" @change="$emit('selected', financingType)">
                <option value="">Choose</option>
                <option v-for="financingType in financingTypes" :value="financingType">
                    {{ financingType }}
                </option>
            </select>
        </div>
    </form>
</template>

<script>
    export default {
        props: ['financingTypes'],

        data() {
            return {
                financingType: '',
            }
        }
    }
</script>
