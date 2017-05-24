<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendAidaMapToLeads extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $aidaMap;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($aidaMap)
    {
        $this->aidaMap = $aidaMap;
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
            ->view('emails.aida-map', ['name' => $this->aidaMap->buyer->first_name, 'aidaMap' => $this->aidaMap])
            ->attach(storage_path() . '/app/public/' . $this->aidaMap->id . '.pdf', [
                'as' => 'AIDA Map.pdf',
            ]);
    }
}
