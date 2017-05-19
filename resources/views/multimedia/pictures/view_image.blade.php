@extends("layouts.app")

@section("content")
<div class="row">
	<div class="col-md-6">
		<h2>{{ $photo->house_model_name }}</h2>
	</div>
</div>
<div class="row">
	<div class="col-md-6">
		<img src="{{ $photo->picture_file }}" height="290" width="400">
	</div>

	<div class="col-md-6">
		<form method="post" action="/delete/photo/{{ $photo->filename }}">
			{{ csrf_field() }}
			{{ method_field("DELETE")}}

			<input type="submit" name="delete" value="Delete" class="btn btn-danger" onclick="return confirm('Are you sure you want to DELETE?');"></button>
		</form>
	</div>
</div>
<br>
<div class="row">
				<div class="col-md-6">
					<label for="developer">Developer</label>

					<input type="" value="{{ $photo->developer }}" readonly class="form-control">
				</div>

				<div class="col-md-6">
					<label for="house_model_name">House Model Name</label>

					<input type="" value="{{ $photo->house_model_name }}" readonly class="form-control">
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
					<label for="lot_size">Lot Size</label>

					<input type="number" name="lot_size" class="form-control" readonly value="{{ $photo->lot_size }}">
				</div>

				<div class="col-md-6">
					<label for="floor_size">Floor Size</label>

					<input type="number" name="floor_size" class="form-control" readonly value="{{ $photo->floor_size }}">
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-6">
					<label for="number_of_rooms">No. of Rooms</label>

					<input type="number" name="number_of_rooms" class="form-control" readonly value="{{ $photo->number_of_rooms }}">
				</div>

				<div class="col-md-6">
					<label for="number_of_bathrooms">No. of Bathrooms</label>

					<input type="number" name="number_of_bathrooms" class="form-control" readonly value="{{ $photo->number_of_bathrooms }}">
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
					<label for="storeys">Storeys</label>

					<input type="number" name="storeys" class="form-control" readonly value="{{ $photo->storeys }}">
				</div>

				<div class="col-md-6">
					<label for="with_carport">With Carport?</label>

					@if($photo->with_carport == 'y')
						<input type="" value="Yes" readonly class="form-control">
					@else
						<input type="" value="No" readonly class="form-control">
					@endif
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
    				<label for="description">Description</label>

    				<textarea name="description" class="form-control" readonly>{{ $photo->description }}</textarea>
				</div>
			</div>

			<div class="row">
				<div class="col-md-6">
					<label>Amenities:</label>
					@foreach($photo->amenities as $a)
						<p>{{ $a->name }}</p>
					@endforeach
				</div>
			</div>
@endsection