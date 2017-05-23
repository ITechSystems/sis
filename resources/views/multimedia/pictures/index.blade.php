@extends("layouts.app")

@section("content")
	<div class="container">
		<meta id="token" name="token" value="{{csrf_token()}}">
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
						        <form action="/apply/upload" method="post" enctype="multipart/form-data">
						        	{{ csrf_field() }}
						        	<house-model></house-model>
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

						      @include('multimedia.pictures._partials.pictures_list')
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