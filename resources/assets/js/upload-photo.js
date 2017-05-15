import './bootstrap.js';
new Vue({
	data: {
		photo_id: '',
		developer: '',
		developers: [],
		model_names: [],
	},

	el: '#app',

	ready(){
		if(this.photo_id){
			alert(this.photo_id)
		}
	},

	methods: {
		getModelNames(developer){
			this.$http.get('/house_model_photos/getModelNames?developer=' + developer).then(res => {
				this.model_names = res.data
			})
		}
	}
})