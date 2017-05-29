import './bootstrap.js';
import HouseModel from './components/HouseModelUpload/HouseModelForm.vue'

new Vue({
	components: {
		HouseModel
	},

	data: {
		photo_id: '',
		developer: '',
		developers: [],
		model_names: [],
	},

	el: '#app',

	ready(){
	},

	methods: {
		getModelNames(developer){
			this.$http.get('/house_model_photos/getModelNames?developer=' + developer).then(res => {
				this.model_names = res.data
			})
		},

		getModelNamesForFloorPlan(developer){
			this.$http.get('/house_model_photos/getModelNamesForFloorPlan?developer=' + developer).then(res => {
				this.model_names = res.data
				if(this.model_names.length < 1)
					alert('No house model available for floor plan upload for developer: ' + developer)
			})
		}
	}
})