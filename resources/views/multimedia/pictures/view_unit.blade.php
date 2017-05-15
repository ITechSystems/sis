@extends("layouts.app")

@section("content")
<div class="row">
	<div class="col-md-6">
		<h2>{{ $photo->unit }}</h2>
	</div>
</div>
<div class="row">
	<div class="col-md-6">
		<img src="{{ $photo->picture_file }}" height="290" width="400">
	</div>

	<div class="col-md-6">
		<form method="post" action="/delete/unit_photo/{{ $photo->filename }}">
			{{ csrf_field() }}
			{{ method_field("DELETE")}}

			<input type="submit" name="delete" value="Delete" class="btn btn-danger" onclick="return confirm('Are you sure you want to DELETE?');">
		</form>
	</div>
</div>
<div class="row">
	<div class="col-md-6">
		<p><b>Description:</b></p>
		<p>{{ $photo->description }}</p>
	</div>
</div>
@endsection