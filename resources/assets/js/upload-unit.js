import './bootstrap.js';
new Vue({
	data: {
		developer: '',
		units: [],
		phases: []
	},

	el: '#app',

	ready(){
		if(this.photo_id){
			alert(this.photo_id)
		}
	},

	methods: {
		getUnits(developer){
			this.$http.get('/units/getBlockLots?developer=' + developer).then(res => {
				this.units = res.data
			})
		},

		getZones(developer){
			this.$http.get('/units/getPhases?developer=' + developer).then(res => {
				this.phases = res.data
				// console.log(this.zones)
			})
		}
	}
})