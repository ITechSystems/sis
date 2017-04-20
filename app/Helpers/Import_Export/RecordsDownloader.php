<?php
namespace App\Helpers\Import_Export;

class RecordsDownloader{
	public static function array_to_csv_to_download(array $data, $filename = "export", $line_headers = [], $delimeter = ",", $enclosure = '"')
    {
        $milliseconds = round(microtime(true) * 1000);

        $f = fopen('php://memory', 'w');

        //add headers to the start of the file
        fputcsv($f, $line_headers, $delimeter, $enclosure);

        foreach($data as $line){
            fputcsv($f, $line, $delimeter, $enclosure);
        }

        //reset the file pointer to the start of the file
        fseek($f, 0);
        //tell the browser it is going to be a csv file
        header('Content-Type: application/csv');
        //tell the browser we want to save it instead of displaying it
        header('Content-Disposition: attachment; filename="' . $filename . '_' . $milliseconds . '.csv' . '";');
        //make php send the generated csv lines to the browser
        fpassthru($f);

        fclose($f);
    }
}