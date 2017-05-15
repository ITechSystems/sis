<p>Hi</p>
<br>
<p>Good day!</p>
<br>
<p>Please login to our sales information system by visiting this url - <a href="{{ env('APP_URL') }}/login">{{ env('APP_URL') }}/login</a>.
<p>Here are your credentials</p>
<p>Email: {{ $user->email }}</p>
<p>Password:  {{ $password }}</p>
<br>
<p>Then go to <a href="{{ env('APP_URL') }}/users/{{ $user->id }}/edit">{{ env('APP_URL') }}/users/{{ $user->id }}/edit</a>.
<p>Update the necessary information including your password.</p>
<br>
<br>
<p>Many thanks,</p>
<br>
<p>{{ auth()->user()->name }}</p>
<p>Next Level</p>
