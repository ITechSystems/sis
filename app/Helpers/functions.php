<?php

function randomString($length = 10)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $string = '';

    for ($i = 0; $i < $length; $i++) {
        $string .= $characters[rand(0, $charactersLength - 1)];
    }

    return $string;
}
