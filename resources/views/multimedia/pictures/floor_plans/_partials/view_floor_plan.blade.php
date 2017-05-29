@extends("layouts.app")

@section("content")
<div class="row">
	<div class="col-md-6">
		<h2>{{ $photo->phase }}</h2>
	</div>
</div>
<div class="row">
	<div class="col-md-6">
		<img src="{{ $photo->picture_file }}" height="590" width="700">
	</div>
</div>
<br>
<div class="row">
				<div class="col-md-6">
					<label for="developer">Developer</label>

					<input type="" value="{{ $photo->developer }}" readonly class="form-control">
				</div>
</div>

			<div class="row">
				<div class="col-md-6">
					<label for="house_model_name">House Model</label>

					<input type="text" name="house_model_name" class="form-control" readonly value="{{ $photo->house_model_name }}">
				</div>

				
			</div>

			<div class="row">
				<div class="col-md-12">
    				<label for="description">Description</label>

    				<textarea name="description" class="form-control" readonly>{{ $photo->description }}</textarea>
				</div>
			</div>

			
@endsection