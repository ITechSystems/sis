<form action="/apply/maps/upload" method="post" enctype="multipart/form-data">
	{{ csrf_field() }}

	<div class="control-group">
		<div class="controls">
			<div class="row">
				<div class="col-md-6">
					<label for="developer">Developer</label>

					<select name="developer" class="form-control" @change="getZones(developer)" v-model="developer">
						<option>Choose</option>
						@foreach($developers as $d)
							<option>{{ $d->developer }}</option>
						@endforeach
					</select>

				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<label for="phase">Phase</label>

					<select name="phase" class="form-control" required>
						<option>Choose</option>
						<option v-for="p in phases">@{{ p.phase }}</option>
					</select>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
    				<label for="description">Description</label>

    				<input type="text" name="description" class="form-control" required>
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