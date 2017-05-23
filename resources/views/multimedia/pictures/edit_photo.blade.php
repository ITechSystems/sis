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

							    				<div class="col-md-6">
							    					<label for="house_model_name">House Model Name</label>

							    					<input type="text" name="house_model_name" class="form-control" value="{{ $photo->house_model_name }}" readonly>
							    				</div>
							    			</div>

							    			<div class="row">
												<div class="col-md-6">
													<label for="lot_size">Lot Size</label>

													<input type="number" name="lot_size" class="form-control" value="{{ $photo->lot_size }}" step="0.01" min="1" required>
												</div>

												<div class="col-md-6">
													<label for="floor_size">Floor Size</label>

													<input type="number" name="floor_size" class="form-control" value="{{ $photo->floor_size }}" step="0.01" min="1" required>
												</div>
											</div>
											
											<div class="row">
												<div class="col-md-6">
													<label for="number_of_rooms">No. of Rooms</label>

													<input type="number" name="number_of_rooms" class="form-control" value="{{ $photo->number_of_rooms }}" required>
												</div>

												<div class="col-md-6">
													<label for="number_of_bathrooms">No. of Bathrooms</label>

													<input type="number" name="number_of_bathrooms" class="form-control" value="{{ $photo->number_of_bathrooms }}" min="1" required>
												</div>
											</div>

											<div class="row">
												<div class="col-md-6">
													<label for="storeys">Storeys</label>

													<input type="number" name="storeys" class="form-control" value="{{ $photo->storeys }}" min="1" required>
												</div>

												<div class="col-md-6">
													<label for="with_carport">With Carport?</label>

													<select name="with_carport" class="form-control" required>
														@if($photo->with_carport == 'y')
															<option value="y" selected>Yes</option>
															<option value="n">No</option>
														@else
															<option value="n" selected>No</option>
															<option value="y">Yes</option>
														@endif
													</select>
												</div>
											</div>

											<div class="row">
												<div class="col-md-12">
								    				<label for="description">Description</label>

								    				<textarea name="description" class="form-control" required>
								    					{{ $photo->description }}
								    				</textarea>
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
								    				<input type="file" name="file" id="file" accept="image/*">
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