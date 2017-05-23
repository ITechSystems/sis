@extends("layouts.app")

@section("content")
<form action="/maps/update/{{ $photo->id }}" method="post" enctype="multipart/form-data">
	{{ csrf_field() }}
	{{ method_field('PATCH') }}

	<div class="control-group">
		<div class="controls">
			<div class="row">
				<div class="col-md-6">
					<label for="developer">Developer</label>

					<input type="text" name="developer" class="form-control" value="{{ $photo->developer }}" readonly>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<label for="phase">Phase</label>

					<input type="text" name="phase" class="form-control" value="{{ $photo->phase }}" readonly>
					<!-- <select name="phase" class="form-control" required>
						<option></option>
						<option v-for="p in phases">@{{ p.phase }}</option>
					</select> -->
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
    				<label for="description">Description</label>

    				<input type="text" name="description" class="form-control" value="{{ $photo->description }}" required>
				</div>
			</div>
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
			</div><br>
			<div class="row">
				<div class="col-md-6">
					<input type="submit" name="submit" value="Upload">
				</div>
			</div>
		</div>
	</div>
</form>
@endsection