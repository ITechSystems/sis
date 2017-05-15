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
					<div class="panel-heading">Upload Pictures</div>

					<div class="panel-body">
						<div class="about-section">
						   <div class="text-content">
						     <div class="span7 offset1">
						        @if(Session::has('success'))
						          <div class="alert-box success">
						          <h2>{!! Session::get('success') !!}</h2>
						          </div>
						        @endif

							    <form action="/photo/house_model/{{ $photo->id }}" method="post" enctype="multipart/form-data">
							    	{{ csrf_field() }}
							    	{{ method_field("PATCH") }}

							    	<div class="control-group">
							    		<div class="controls">
							    			<div class="row">
							    				<div class="col-md-6">
							    					<label for="developer">Developer</label>


							    					<input type="text" name="developer" class="form-control" value="{{ $photo->developer }}" readonly>
							    				</div>
							    			</div>
							    			<div class="row">
							    				<div class="col-md-6">
							    					<label for="house_model_name">House Model Name</label>

							    					<input type="text" name="house_model_name" class="form-control" value="{{ $photo->house_model_name }}" readonly>
							    				</div>
							    			</div>

							    			<div class="row">
							    				<div class="col-md-6">
								    				<label for="description">Description</label>

								    				<input type="text" name="description" class="form-control" value="{{ $photo->description }}" required>
							    				</div>
							    			</div>
							    			<div class="row">
							    				<div class="col-md-6">
							    					<b>Uploaded Image:</b>
							    				</div>
							    			</div>
							    			<div class="row">
							    				<div class="col-md-6">
							    					<img src="{{ route('getentry', $photo->filename) }}" alt="ALT NAME" class="img-responsive" height="300" width="300" />
							    				</div>
							    			</div>
							    			<div class="row">
							    				<div class="col-md-6">
								    				<label>File to upload:</label>
								    				<input type="file" name="file" id="file">
							    				</div>
							    			</div><br>
							    			<div class="row">
							    				<div class="col-md-6">
							    					<input type="submit" name="submit" value="Upload">
							    				</div>
							    			</div>
							    		</div>
							    	</div>
							    </form>
						      </div>

						      @if(count($errors) > 0)
						      	<div class="alert alert-danger">
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
			</div>
		</div>
	</div>
@endsection

@section('js')
	<script src="/js/upload-photo.js"></script>
@endsection