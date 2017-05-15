<?php

$pdf = new \App\PDF;
$pdf->ShowGrid(false);

$pdf->AddPage('L', 'Legal');
$pdf->SetFont('Arial', '', 8);

$pdf->SetXY(5, 5);
$pdf->Cell(40, 15, 'Company Logo', 1, 1, 'C');

$pdf->SetXY(115, 5);
$pdf->Cell(60, 5, 'Prepared By: Mr. Hervie Fajardo', 1, 1, 'L');
$pdf->SetXY(115, 10);
$pdf->Cell(60, 5, 'Contact No: 0917-8720176', 1, 1, 'L');
$pdf->SetXY(115, 15);
$pdf->Cell(60, 5, 'Email: hervie.fajardo@gmail.com', 1, 1, 'L');

$pdf->SetXY(175, 5);
$pdf->Cell(60, 5, 'Developer: Property Company of Friends Inc.', 1, 1, 'L');
$pdf->SetXY(175, 10);
$pdf->Cell(60, 5, 'Project: Lancaster New City', 1, 1, 'L');
$pdf->SetXY(175, 15);
$pdf->Cell(60, 5, 'Location: Cavite', 1, 1, 'L');

$pdf->SetXY(115, 25);
$pdf->Cell(60, 10, 'BUYER\'S COMPUTATIONS FOR', 1, 1, 'L');
$pdf->SetXY(115, 35);
$pdf->Cell(60, 5, $data->buyer->last_name . ', ' . $data->buyer->first_name . ' ' . $data->buyer->middle_name . ', ' . $data->buyer->extension, 1, 1, 'L');
$pdf->SetXY(115, 40);
$pdf->Cell(60, 5, $data->buyer->mobile, 1, 1, 'L');
$pdf->SetXY(115, 45);
$pdf->Cell(60, 5, $data->buyer->email, 1, 1, 'L');
$pdf->SetXY(115, 50);
$pdf->Cell(60, 5, $data->buyer->marital_status, 1, 1, 'L');
$pdf->SetXY(115, 55);
$pdf->Cell(60, 5, $data->buyer->financing_type, 1, 1, 'L');
$pdf->SetXY(115, 60);
$pdf->Cell(60, 5, $data->buyer->work_type, 1, 1, 'L');
$pdf->SetXY(115, 65);
$pdf->Cell(60, 5, $data->buyer->country, 1, 1, 'L');
$pdf->SetXY(115, 70);
$pdf->Cell(60, 5, $data->buyer->equity_type, 1, 1, 'L');

$pdf->Image('img/map.png', 180, 25, 55, 50);
$pdf->Image('img/map.png', 115, 80, 120, 95);

$pdf->SetXY(240, 25);
$pdf->Cell(110, 10, 'REQUIREMENTS', 1, 1, 'L');
$pdf->SetXY(240, 35);
$pdf->Cell(110, 5, 'Bank Financing', 1, 1, 'L');
$pdf->SetXY(240, 40);
$pdf->Cell(110, 5, 'Married', 1, 1, 'L');
$pdf->SetXY(240, 45);
$pdf->Cell(110, 5, 'OFW (Land-Based)', 1, 1, 'L');
$pdf->SetXY(240, 50);
$pdf->Cell(110, 5, '3pcs. 1x1 ID Picture (Buyer, Spouse & Atty-in-Fact) w/ name &amp; Unit ID at the back', 1, 1, 'L');
$pdf->SetXY(240, 55);
$pdf->Cell(110, 5, '2 Valid ID\'s with 3 specimen signature (Photocopy only) (Buyer &amp; Spouse)', 1, 1, 'L');
$pdf->SetXY(240, 60);
$pdf->Cell(110, 5, 'SSS, GSIS, Driver\'s License, Voter\'s, PRC, Passport', 1, 1, 'L');
$pdf->SetXY(240, 65);
$pdf->Cell(110, 5, 'Postal ID\'s are allowed for AIF only (or unemployed spouse)', 1, 1, 'L');
$pdf->SetXY(240, 70);
$pdf->Cell(110, 5, 'Passport - validity should not be expired (Buyer)', 1, 1, 'L');
$pdf->SetXY(240, 75);
$pdf->Cell(110, 5, 'Must have date of arrival & departure', 1, 1, 'L');
$pdf->SetXY(240, 80);
$pdf->Cell(110, 5, 'Residence Certificate for the Current Year (Cedula) (Spouse &amp; Atty-In-Fact)', 1, 1, 'L');

$pdf->SetXY(240, 95);
$pdf->Cell(110, 10, 'FOR RESERVATIONS, CONTACT US AT', 1, 1, 'L');
$pdf->SetXY(240, 105);
$pdf->Cell(110, 5, 'MR. HERVIE FAJARDO', 1, 1, 'L');
$pdf->SetXY(240, 110);
$pdf->Cell(110, 5, 'Globe: +63 917 872 0176', 1, 1, 'L');
$pdf->SetXY(240, 115);
$pdf->Cell(110, 5, 'Smart: +63 917 565 8645', 1, 1, 'L');
$pdf->SetXY(240, 120);
$pdf->Cell(110, 5, 'LANDLINE HOTLINES', 1, 1, 'L');
$pdf->SetXY(240, 125);
$pdf->Cell(110, 5, 'Manila Telephone: (02) 256 6574', 1, 1, 'L');
$pdf->SetXY(240, 130);
$pdf->Cell(110, 5, 'Cavite Telephone: (046) 440 6474', 1, 1, 'L');

$pdf->SetXY(240, 140);
$pdf->Cell(110, 5, 'Main Office', 1, 1, 'L');
$pdf->SetXY(240, 145);
$pdf->Cell(110, 5, '55 Tinio St. Brgy. Addition Hills Mandaluyong City Philippines 1552', 1, 1, 'L');

$pdf->SetXY(240, 155);
$pdf->Cell(110, 5, 'Branch Office', 1, 1, 'L');
$pdf->SetXY(240, 160);
$pdf->Cell(110, 5, '55 Gen. Aguinaldo Hi-way Brgy. Tanzang Luma Imus City, Cavite Philippines 4103', 1, 1, 'L');

$pdf->Image('img/house.jpg', 5, 25, 105, 70);

$pdf->SetXY(5, 100);
$pdf->Cell(80, 5, 'BLOCK AND LOT', 1, 'L');
$pdf->SetXY(85, 100);
$pdf->Cell(25, 5, $data->unit->block_lot, 1, 'L');

$pdf->SetXY(5, 105);
$pdf->Cell(80, 5, 'LOT AREA', 1, 'L');
$pdf->SetXY(85, 105);
$pdf->Cell(25, 5, $data->unit->lot_area . ' SQM', 1, 'L');

$pdf->SetXY(5, 110);
$pdf->Cell(80, 5, 'LOT TYPE', 1, 'L');
$pdf->SetXY(85, 110);
$pdf->Cell(25, 5, $data->unit->lot_type, 1, 'L');

$pdf->SetXY(5, 115);
$pdf->Cell(80, 5, 'FLOOR AREA', 1, 'L');
$pdf->SetXY(85, 115);
$pdf->Cell(25, 5, $data->unit->floor_area . ' SQM', 1, 'L');

$pdf->SetXY(5, 120);
$pdf->Cell(80, 5, 'HOUSE MODEL', 1, 'L');
$pdf->SetXY(85, 120);
$pdf->Cell(25, 5, $data->unit->house_model, 1, 'L');

$pdf->SetXY(5, 125);
$pdf->Cell(80, 5, 'TOTAL CONTRACT PRICE', 1, 'L');
$pdf->SetXY(85, 125);
$pdf->Cell(25, 5, '3,060,320.00', 1, 1, 'R');

$pdf->SetXY(5, 130);
$pdf->Cell(80, 5, 'RESERVATION FEE', 1, 'L');
$pdf->SetXY(85, 130);
$pdf->Cell(25, 5, number_format($data->unit->reservation_fee, 2), 1, 1, 'R');

$pdf->SetXY(5, 135);
$pdf->Cell(30, 15, 'DOWNPAYMENT', 1, 1, 'C');

$pdf->SetXY(35, 135);
$pdf->Cell(50, 5, $data->unit->downpayment->percentage . '% Equity', 1, 1, 'C');
$pdf->SetXY(85, 135);
$pdf->Cell(25, 5, number_format($data->unit->downpayment->equity, 2), 1, 1, 'R');

$pdf->SetXY(35, 140);
$pdf->Cell(50, 5, 'Terms', 1, 1, 'C');
$pdf->SetXY(85, 140);
$pdf->Cell(25, 5, $data->unit->downpayment->term, 1, 1, 'R');

$pdf->SetXY(35, 145);
$pdf->Cell(50, 5, 'Amount/Month', 1, 1, 'C');
$pdf->SetXY(85, 145);
$pdf->Cell(25, 5, number_format($data->unit->downpayment->monthly, 2), 1, 1, 'R');

$pdf->SetXY(5, 150);
$pdf->Cell(30, 15, 'LOANABLE AMOUNT', 1, 1, 'C');

foreach ($data->unit->loans as $index => $loan) {
    if ($loan->finance_type == $data->financing_type) {
        $pdf->SetXY(35, 150 + (15 * $index));
        $pdf->Cell(10, 15, $loan->percentage, 1, 1, 'C');

        $pdf->SetXY(45, 150 + (15 * $index));
        $pdf->Cell(40, 5, 'Loanable Amount', 1, 1, 'L');
        $pdf->SetXY(85, 150 + (15 * $index));
        $pdf->Cell(25, 5, number_format($loan->total, 2), 1, 1, 'R');

        $pdf->SetXY(45, 155 + (15 * $index));
        $pdf->Cell(40, 5, 'MRI & FIRE', 1, 1, 'L');
        $pdf->SetXY(85, 155 + (15 * $index));
        $pdf->Cell(25, 5, number_format($loan->mri, 2), 1, 1, 'R');

        $pdf->SetXY(45, 160 + (15 * $index));
        $pdf->Cell(40, 5, $loan->years . ' years / ' . $loan->monthly_percentage . '%', 1, 1, 'L');
        $pdf->SetXY(85, 160 + (15 * $index));
        $pdf->Cell(25, 5, number_format($loan->monthly_amortization, 2), 1, 1, 'R');
    }
}

if (isset($download)) {
    $pdf->Output($filePath, 'F');
?>
<script>
    window.close();
</script>
<?php
} else {
    $pdf->Output();
}
exit;
