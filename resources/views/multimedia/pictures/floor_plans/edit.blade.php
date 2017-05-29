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
					<div class="panel-heading">Upload Floor Plan</div>

					<div class="panel-body">
						<div class="about-section">
						   <div class="text-content">
						     <div class="col-md-12">
						        @if(Session::has('success'))
						          <div class="alert alert-info">
						          <h2>{!! Session::get('success') !!}</h2>
						          </div>
						        @endif

						        <form action="/update/floor_plans/{{ $photo->id}}" method="post" enctype="multipart/form-data">
									{{ csrf_field() }}

									{{ method_field('PATCH') }}

							    	@include('multimedia.pictures.floor_plans._partials.form')
							    </form>
						      </div>
						   </div>
						</div>
					</div>

					@if(count($errors) > 0)
				      	<div class="alert alert-danger">
				      		<p>Update failed.</p>
						      		
				      		<ul>
				      			@foreach($errors->all() as $error)
				      				<li>{{ $error }}</li>
				      			@endforeach
				      		</ul>
				      	</div>
				    @endif
				</div>
			</div>
		</div>
	</div>
@endsection