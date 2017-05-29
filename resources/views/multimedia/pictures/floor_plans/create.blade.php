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
						          	{!! Session::get('success') !!}
						          </div>
						        @endif

						        <form action="/apply/floor_plans/upload" method="post" enctype="multipart/form-data">
									{{ csrf_field() }}
							    	@include('multimedia.pictures.floor_plans._partials.form')
							    </form>
						      </div>
						   </div>
						</div>
					</div>

					<div class="panel-body">
						<div class="col-md-12">
							@if(count($errors) > 0)
						      	<div class="alert alert-danger">
						      		<p>Upload failed.</p>
						      		
						      		<ul>
						      			@foreach($errors->all() as $error)
						      				<li>{{ $error }}</li>
						      			@endforeach
						      		</ul>
						      	</div>
						    @endif

						    @include('multimedia.pictures.floor_plans._partials.pictures_list')
						</div>	
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection

@section('js')
	<script src="/js/upload-photo.js"></script>
@endsection