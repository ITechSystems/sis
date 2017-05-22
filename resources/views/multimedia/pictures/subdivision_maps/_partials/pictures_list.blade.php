<h1> Pictures list</h1>

<table class="table table-striped table-bordered">
	<thead>
		<tr>
			<td>Developer</td>
			<td>Phase</td>
			<td>Picture</td>
			<td>Action</td>
		</tr>
	</thead>
	<tbody>
		@foreach($entries as $entry)
			<tr>
				<td>{{ $entry->developer }}</td>

				<td>
					<a href="/view/map/{{ $entry->filename }}">
                		{{$entry->phase}}
                	</a>
	            </td>

				<td>
					<img src="{{ $entry->picture_file }}" alt="ALT NAME" class="img-responsive" height="200" width="200" />
				</td>

				<td>
					<a href="/view/map/{{ $entry->filename }}" class="btn btn-success btn-xs">View</a>

					<a href="/house_models/{{ $entry->id }}/edit" class="btn btn-info btn-xs">Edit</a>

					<form method="post" action="/delete/map/{{ $entry->filename }}">
						{{ csrf_field() }}
						{{ method_field("DELETE")}}

						<input type="submit" name="delete" value="Delete" class="btn btn-danger btn-xs" onclick="return confirm('Are you sure you want to DELETE?');">
					</form>
				</td>
			</tr>
		@endforeach
	</tbody>
</table>