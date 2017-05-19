@extends("layouts.app")

@section("content")
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				@if(\Session::has('message'))
			        <div class="alert alert-info">
			            {{ \Session::get('message') }}
			        </div>
			    @endif
		    </div>
		</div>
		
		<div class="row">
			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-heading">Add Amenity</div>

					<div class="panel-body">
						<form action="/data/amenities" method="post">
							{{ csrf_field() }}

							<div class="row">
								<div class="col-md-6">
									<label for="name">Amenity name:</label>

									<input type="text" name="name" class="form-control">
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<input type="submit" name="submit">
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection