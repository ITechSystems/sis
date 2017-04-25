Vue.component('modal', {
	template: `<div class="modal fade" id="property_info" role="dialog">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <table class="table table-striped">
	            <tr>
	                <td>Date</td>
	                <td>Invoice Number</td>
	                <td>Quantity</td>
	                <td>Item</td>
	                <td>Sale</td>
	                <td>Cost</td>
	                <td>Profit</td>
	            </tr>
	            
	      </div>
	      
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal" @click="$dispatch('closeModal')">Close</button>
	      </div>
	    </div>
	  </div>
	</div>`,

	props: ['log', 'start', 'end'],

	data() {
		return {items: [],}
	},
	created() {
		// this.getInventoryBreakdown();
	},
	methods:{
		getInventoryBreakdown(){alert()
			this.$http.get(`/search/unitById/${this.id}`).then(res => {
				this.items = res.data
			})
			// this.$http.get(`/profitability/${this.log}/${this.start}/${this.end}`).then(res => {
			// 	this.items = res.data
			// })
		},
	}
})

new Vue({
	el: '.page-content',

	data: {
		id: '',
		items: [],
		showModal: false,
	},

	methods: {
		showInfo(){
			alert()
		}
	},
	events: {
		closeModal() {
			this.showModal = false
		}
	}
})