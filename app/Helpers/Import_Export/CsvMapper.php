<?php

namespace App\Helpers\Import_Export;

class CsvMapper
{
    /**
     * Returns an array of lines from the CSV file
     *
     * @param  File $file
     * @return array
     */
    public static function map($file)
    {
        return array_map('str_getcsv', $file);
    }
}
