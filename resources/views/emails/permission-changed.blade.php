<p>Hi, {{ $owner->first_name }}</p>

<p>FYI.</p>
<p>There are changes in permissions for the role of <span style="text-decoration: underline">{{ $role->name }}</span></p>
<p>Changes are made by: {{ $user->first_name }} ({{ $user->email }})</p>

<p>Thanks,</p>
<p>{{ env('MAIL_FROM_NAME') }}</p>
