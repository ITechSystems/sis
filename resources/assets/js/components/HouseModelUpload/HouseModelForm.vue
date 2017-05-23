<template>
	<div class="control-group">
		<div class="controls">
			<div class="row">
				<div class="col-md-6">
					<label for="developer">Developer</label>

					<select name="developer" class="form-control" @change="getModelNames(form.developer)" v-model="form.developer" required>
						<option v-for="d in developers">{{ d.developer }}</option>
					</select>
				</div>

				<div class="col-md-6">
					<label for="house_model_name">House Model Name</label>

					<select name="house_model_name" class="form-control" required>
						<option value="">Choose</option>
						<option v-for="model in model_names">{{ model.house_model }}</option>
					</select>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
					<label for="lot_size">Lot Size</label>

					<input type="number" name="lot_size" class="form-control" step="0.01" required>
				</div>

				<div class="col-md-6">
					<label for="floor_size">Floor Size</label>

					<input type="number" name="floor_size" class="form-control" step="0.01" required>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-6">
					<label for="number_of_rooms">No. of Rooms</label>

					<input type="number" name="number_of_rooms" class="form-control" required>
				</div>

				<div class="col-md-6">
					<label for="number_of_bathrooms">No. of Bathrooms</label>

					<input type="number" name="number_of_bathrooms" class="form-control" required>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
					<label for="storeys">Storeys</label>

					<input type="number" name="storeys" class="form-control" required>
				</div>

				<div class="col-md-6">
					<label for="with_carport">With Carport?</label>

					<select name="with_carport" class="form-control" required>
						<option value="y">Yes</option>
						<option value="n">No</option>
					</select>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
    				<label for="description">Description</label>

    				<textarea name="description" class="form-control" required></textarea>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
					<label>Amenities</label>
					
					<table>
						<tr v-for="a in amenities">
							<td>
								<input type="checkbox" name="amenities[]" :value="a.id">{{ a.name }}
							</td>
						</tr>
					</table>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-6">
    				<label>File to upload:</label>
    				<input type="file" name="file" id="file" required>
				</div>
			</div><br>
			<div class="row">
				<div class="col-md-6">
					<input type="submit" name="submit" value="Upload">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Form from '../../core/Form.js';

	export default{
		data(){
			return {
				form: new Form({
					developer: ''
				}),
				developers: [],
				model_names: [],
				amenities: []
			}
		},

		mounted(){
			this.getDevelopers()
			this.getAmenities()
		},

		methods: {
			getDevelopers(){
                this.$http.get(`/search/getDevelopers`).then(res => {
                    this.developers = res.data
                })
            },

            getModelNames(developer){
				this.$http.get('/house_model_photos/getModelNames?developer=' + developer).then(res => {
					this.model_names = res.data
				})
			},

			getAmenities(){
				this.$http.get(`/data/amenities/getAll`).then(res => {
					this.amenities = res.data
				})
			}
		}
	}
</script>