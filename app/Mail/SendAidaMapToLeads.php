<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendAidaMapToLeads extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $buyerName;

    public $filePath;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($buyerName, $filePath = null)
    {
        $this->buyerName = $buyerName;

        $this->filePath = $filePath;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(['address' => auth()->user()->email])
            ->subject('AIDA Map')
            ->view('emails.aida-map', ['name' => $this->buyerName])
            ->attach(storage_path() . '/app/public/aida-map-1494833193.pdf');
    }
}
