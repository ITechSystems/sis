<h1> Pictures list</h1>

<table class="table table-striped table-bordered">
	<thead>
		<tr>
			<td>Developer</td>
			<td>Unit</td>
			<td>Picture</td>
			<td>Action</td>
		</tr>
	</thead>
	<tbody>
		@foreach($entries as $entry)
			<tr>
				<td>{{ $entry->developer }}</td>

				<td>
					<a href="/view/unit/{{ $entry->filename }}">
                		{{ $entry->unit }}
                	</a>
	            </td>

				<td>
					<img src="{{ $entry->picture_file }}" alt="{{ 'Photo of ' . $entry->unit }}" class="img-responsive" height="200" width="200">
				</td>

				<td>
					<a href="/view/unit/{{ $entry->filename }}" class="btn btn-success btn-xs">View</a>

					<a href="/unit_photo/{{ $entry->id }}/edit" class="btn btn-info btn-xs">Edit</a>

					<form method="post" action="/delete/unit_photo/{{ $entry->filename }}">
						{{ csrf_field() }}
						{{ method_field("DELETE")}}

						<input type="submit" name="delete" value="Delete" class="btn btn-danger btn-xs" onclick="return confirm('Are you sure you want to DELETE?');">
					</form>
				</td>
			</tr>
		@endforeach
	</tbody>
</table>