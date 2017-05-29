<div class="control-group">
	<div class="controls">
		<div class="row">
			<div class="col-md-6">
				<label for="developer">Developer</label>

				@if(! isset($photo))
					<select name="developer" class="form-control" @change="getModelNamesForFloorPlan(developer)" v-model="developer" required>
						@foreach($developers as $d)
							<option>{{ $d->developer }}</option>
						@endforeach
					</select>
				@else
					<input type="text" name="developer" class="form-control" value="{{ $photo->developer }}" readonly>
				@endif

			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<label for="house_model_name">House Model Name</label>

				@if(! isset($photo))
					<select name="house_model_name" class="form-control" required>
						<option v-for="model in model_names">@{{ model.house_model }}</option>
					</select>
				@else
					<input type="text" name="house_model_name" class="form-control" value="{{ $photo->house_model_name }}" readonly>
				@endif
			</div>
		</div>

		<div class="row">
			<div class="col-md-6">
				<label for="description">Description</label>

				<textarea name="description" class="form-control" required>{{ $photo->description or '' }}</textarea>
			</div>
		</div>

		@if(isset($photo))
			<br>
			<div class="row">
				<div class="col-md-6">
					<b>Uploaded Image:</b>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<img src="{{ $photo->picture_file }}" alt="ALT NAME" class="img-responsive" height="300" width="300" />
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<label>File to upload:</label>
					<input type="file" name="file" id="file" accept="image/*">
				</div>
			</div>
		@else
			<div class="row">
				<div class="col-md-6">
					<label>File to upload:</label>
					<input type="file" name="file" id="file" accept="image/*" required>
				</div>
			</div>
		@endif

		
		<br>
		<div class="row">
			<div class="col-md-6">
				<input type="submit" name="submit" value="Upload">
			</div>
		</div>
	</div>
</div>