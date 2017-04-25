<template>
	<modal id="property_info">
		<div class="row">
			<p class="heading">{{ items.block_lot }}</p>
		</div>

		<div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal" @click="$emit('closeModal')">Close</button>
	      </div>
	</modal>
</template>

<script>
    import Modal from './Modal.vue';

    export default {
        components: {
            Modal
        },

        props: [
        	'unitId'
        ],

        data(){
        	return {
        		items: []
        	}
        },

        watch: {
        	unitId(){
        		this.items = []
        		this.$http.get(`/search/unitById/${this.unitId}`).then(res => {
                this.items = res.data
            })
        	}
        }
    }
</script>