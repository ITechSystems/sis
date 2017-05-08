<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendAidaMapToLeads extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $name;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name)
    {
        $this->name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(['address' => auth()->user()->email, 'name' => auth()->user()->name])
            ->subject('AIDA Map')
            ->view('emails.aida-map', ['name', $this->name])
            ->attach(storage_path() . '/app/public/aida-map.pdf');
    }
}
