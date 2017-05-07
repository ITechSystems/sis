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
					<div class="panel-heading">Import Data</div>

					<div class="panel-body">
						<form action="/data/import" method="POST" enctype="multipart/form-data">
							{{ csrf_field() }}

							<div class="row">
								<div class="col-md-6">
									<input type="file" name="data">
								</div>
							</div>

							<div class="row">
								<div class="col-md-6">
									<input type="submit" name="">
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection

