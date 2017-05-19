@extends("layouts.app")

@section("content")
	<div class="row">
		<table class="table table-bordered table-striped">
			<tr>
				<th></th>
				<th>Amenity</th>
			</tr>
			@foreach($amenities as $amenity)
				<tr>
					<td>{{ $amenity->id }}</td>
					<td>{{ $amenity->name }}</td>
				</tr>
			@endforeach
		</table>
	</div>
@endsection