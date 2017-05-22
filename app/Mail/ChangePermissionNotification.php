<?php

namespace App\Mail;

use App\Owner;
use App\Role;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ChangePermissionNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $owner;

    public $role;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Owner $owner, Role $role)
    {
        $this->owner = $owner;

        $this->role = $role;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Change of Permission/s')
            ->view('emails.permission-changed', [
                'owner' => $this->owner,
                'role' => $this->role,
                'user' => auth()->user(),
            ]);
    }
}
