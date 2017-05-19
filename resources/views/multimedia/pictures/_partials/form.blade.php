<form action="/apply/upload" method="post" enctype="multipart/form-data">
	{{ csrf_field() }}

	<div class="control-group">
		<div class="controls">
			<div class="row">
				<div class="col-md-6">
					<label for="developer">Developer</label>

					<select name="developer" class="form-control" @change="getModelNames(developer)" v-model="developer">
						<option>Choose</option>
						@foreach($developers as $d)
							<option>{{ $d->developer }}</option>
						@endforeach
					</select>
				</div>

				<div class="col-md-6">
					<label for="house_model_name">House Model Name</label>

					<select name="house_model_name" class="form-control" required>
						<option value="">Choose</option>
						<option v-for="model in model_names">@{{ model.house_model }}</option>
					</select>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
					<label for="lot_size">Lot Size</label>

					<input type="number" name="lot_size" class="form-control">
				</div>

				<div class="col-md-6">
					<label for="floor_size">Floor Size</label>

					<input type="number" name="floor_size" class="form-control">
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-6">
					<label for="number_of_rooms">No. of Rooms</label>

					<input type="number" name="number_of_rooms" class="form-control">
				</div>

				<div class="col-md-6">
					<label for="number_of_bathrooms">No. of Bathrooms</label>

					<input type="number" name="number_of_bathrooms" class="form-control">
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
					<label for="storeys">Storeys</label>

					<input type="number" name="storeys" class="form-control">
				</div>

				<div class="col-md-6">
					<label for="with_carport">With Carport?</label>

					<select name="with_carport" class="form-control">
						<option value="">Choose</option>
						<option value="y">Yes</option>
						<option value="n">No</option>
					</select>
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
    				<label for="description">Description</label>

    				<textarea name="description" class="form-control"></textarea>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
					<label>Amenities</label>

					@foreach($amenities as $a)
						<p>
							<input type="checkbox" name="amenities[]" value="{{ $a->id }}">{{ $a->name }}
						</p>
					@endforeach
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
</form>