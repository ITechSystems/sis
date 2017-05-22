@extends("layouts.app")

@section("content")
<div class="row">
	<div class="col-md-6">
		<h2>{{ $photo->phase }}</h2>
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
</div>

			<div class="row">
				<div class="col-md-6">
					<label for="phase">Phase</label>

					<input type="number" name="phase" class="form-control" readonly value="{{ $photo->phase }}">
				</div>

				
			</div>

			<div class="row">
				<div class="col-md-12">
    				<label for="description">Description</label>

    				<textarea name="description" class="form-control" readonly>{{ $photo->description }}</textarea>
				</div>
			</div>

			
@endsection