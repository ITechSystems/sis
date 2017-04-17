@extends("layouts.app")

@section("content")
	<div class="container">
		<form action="/data/import" method="POST" enctype="multipart/form-data">
		{{ csrf_field() }}
		<div class="row">
			<div class="col-md-6">
				<label>Inventory Price List as of: </label>
				<input type="date" name="date">
			</div>
		</div>

		<div class="row">
			<div class="col-md-6">
				<label>Payment Plan</label>
				<input type="text" name="payment_plan">
			</div>
		</div>

		<div class="row">
			<div class="col-md-6">
				<label>Location: </label>
				<input type="text" name="location">
			</div>
		</div>

		<div class="row">
			<div class="col-md-6">
				<input type="file" name="data">
			</div>
		</div>

		<div class="row">
			<input type="submit" name="">
		</div>
	</div>
	</form>
@endsection