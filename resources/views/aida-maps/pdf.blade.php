<?php

$pdf = new \App\PDF;
$pdf->ShowGrid(true);

$pdf->AddPage();
$pdf->SetFont('Arial');

// Header
// Red Border on Top
$pdf->SetFillColor(239, 75, 76);
$pdf->Rect(0, 0, 210, 5, 'F');

// Background color of header
$pdf->SetFillColor(231, 232, 234);
$pdf->Rect(0, 5, 210, 35, 'F');

$pdf->SetFont('Arial', 'B', 9);
$pdf->SetTextColor(39, 39, 39);
$pdf->SetXY(10, 15);
$pdf->Cell(60, 5, 'MAIN OFFICE', 0, 1, 'L');

$pdf->SetFont('Arial', '', 8);
$pdf->SetTextColor(160, 160, 162);
$pdf->SetXY(10, 20);
$pdf->MultiCell(60, 5, '55 Tinio St. Brgy. Addition Hills, Mandaluyong', 0, 'L', false);

$pdf->SetXY(10, 25);
$pdf->Cell(60, 5, '(02) 256 6574', 0, 1, 'L');

$pdf->SetFont('Arial', 'B', 7);
$pdf->SetTextColor(39, 39, 39);
$pdf->SetXY(70, 10);
$pdf->Cell(70, 5, 'LANCASTER NEW CITY', 0, 1, 'C');

$pdf->SetFont('Arial', 'B', 20);
$pdf->SetTextColor(239, 75, 76);
$pdf->SetXY(70, 15);
$pdf->Cell(70, 15, 'REAL ESTATE', 0, 1, 'C');

$pdf->SetFont('Arial', 'B', 7);
$pdf->SetTextColor(39, 39, 39);
$pdf->SetXY(70, 30);
$pdf->Cell(70, 5, 'AT CAVITE, PHILIPPINES', 0, 1, 'C');

$pdf->SetFont('Arial', 'B', 9);
$pdf->SetTextColor(39, 39, 39);
$pdf->SetXY(140, 17);
$pdf->Cell(60, 5, strtoupper('Company of Friends Realty'), 0, 1, 'R');

$pdf->SetFont('Arial', '', 8);
$pdf->SetTextColor(160, 160, 162);
$pdf->SetXY(140, 22);
$pdf->Cell(60, 5, 'www.companyoffriends.com', 0, 1, 'R');
// End Header

// Houses
$pdf->Image('img/house.jpg', 10, 45, 120, 95);

$pdf->SetFont('Arial', 'B', 8);
$pdf->SetTextColor(255, 255, 255);
$pdf->SetFillColor(239, 75, 76);
$pdf->SetXY(0, 50);
$pdf->MultiCell(45, 7, 'OFFERED AT P' . number_format($data->unit->total_contract_price, 2), 0, 'R', true);
$pdf->SetXY(0, 60);
$pdf->MultiCell(45, 7, 'BLOCKLOT ' . $data->unit->block_lot, 0, 'R', true);
$pdf->SetXY(0, 70);
$pdf->MultiCell(45, 7, 'LOT AREA ' . $data->unit->lot_area . ' SQM', 0, 'R', true);
$pdf->SetXY(0, 80);
$pdf->MultiCell(45, 7, 'FLOOR AREA ' . $data->unit->floor_area . ' SQM', 0, 'R', true);
$pdf->SetXY(0, 90);
$pdf->MultiCell(45, 7, 'LOT TYPE ' . $data->unit->lot_type, 0, 'R', true);
$pdf->SetXY(0, 100);
$pdf->MultiCell(45, 7, 'HOUSE MODEL ' . $data->unit->house_model, 0, 'R', true);
$pdf->SetXY(0, 110);
$pdf->MultiCell(45, 7, 'RESERVATION P' . number_format($data->unit->reservation_fee, 2), 0, 'R', true);

$pdf->Image('img/map.png', 135, 45, 65, 45);

$pdf->Image('img/map.png', 135, 95, 65, 45);
// End Houses


// Payments
$pdf->SetFillColor(231, 232, 234);
$pdf->Rect(10, 145, 120, count($data->unit->loans) * 15 + (25), 'F');

$pdf->SetTextColor(239, 75, 76);
$pdf->SetFontSize(11);
$pdf->SetXY(10, 145);
$pdf->Cell(120, 10, 'DownPayment and Loanable Amounts', 0, 1);

// DownPayment
$pdf->SetTextColor(0, 0, 0);
$pdf->SetFont('Arial', '', 8);
$pdf->SetXY(10, 155);
$pdf->Cell(45, 15, 'DOWNPAYMENT', 1, 1, 'C');

$pdf->SetXY(55, 155);
$pdf->Cell(50, 5, $data->unit->downpayment->percentage . '% Equity', 1, 1, 'C');

$pdf->SetXY(105, 155);
$pdf->Cell(25, 5, number_format($data->unit->downpayment->equity, 2), 1, 1, 'R');

$pdf->SetXY(55, 160);
$pdf->Cell(50, 5, 'Terms', 1, 1, 'C');

$pdf->SetXY(105, 160);
$pdf->Cell(25, 5, $data->unit->downpayment->term, 1, 1, 'R');

$pdf->SetXY(55, 165);
$pdf->Cell(50, 5, 'Amount/Month', 1, 1, 'C');

$pdf->SetXY(105, 165);
$pdf->Cell(25, 5, number_format($data->unit->downpayment->monthly, 2), 1, 1, 'R');
// End DownPayment

// Loan Amount
$pdf->SetXY(10, 170);
$pdf->Cell(45, count($data->unit->loans) * 15, 'LOANABLE AMOUNT', 1, 1, 'C');

foreach ($data->unit->loans as $index => $loan) {
    $pdf->SetXY(55, 170 + (15 * $index));
    $pdf->Cell(10, 15, $loan->percentage, 1, 1, 'C');

    $pdf->SetXY(65, 170 + (15 * $index));
    $pdf->Cell(40, 5, 'Loanable Amount', 1, 1, 'L');
    $pdf->SetXY(105, 170 + (15 * $index));
    $pdf->Cell(25, 5, number_format($loan->total, 2), 1, 1, 'R');

    $pdf->SetXY(65, 175 + (15 * $index));
    $pdf->Cell(40, 5, 'MRI & FIRE', 1, 1, 'L');
    $pdf->SetXY(105, 175 + (15 * $index));
    $pdf->Cell(25, 5, number_format($loan->mri, 2), 1, 1, 'R');

    $pdf->SetXY(65, 180 + (15 * $index));
    $pdf->Cell(40, 5, ucfirst($loan->description) . '-MA ' . $loan->monthly_percentage . '% ' . $loan->years . ' years', 1, 1, 'L');
    $pdf->SetXY(105, 180 + (15 * $index));
    $pdf->Cell(25, 5, number_format($loan->monthly_amortization, 2), 1, 1, 'R');
}
// End Loan Amount
// End Payments

// Requirements
$pdf->SetXY(135, 145);
$pdf->MultiCell(65, count($data->unit->loans) * 15 + (25), '', 1, 1);
$pdf->SetFillColor(195, 209, 209);
//$pdf->Rect(135, 145, 65, count($data->unit->loans) * 15 + (25), 'F');

$pdf->SetXY(135, 145);
$pdf->Cell(65, 10, 'Requirements', 0, 1);

$pdf->SetXY(135, 155);
$pdf->Cell(65, 5, '3pcs. 1x1 ID Picture (Buyer, Spouse & Atty-in-Fact) w/ name &amp; Unit ID at the back', 0, 1, 'L');
$pdf->SetXY(135, 160);
$pdf->Cell(65, 5, '2 Valid ID\'s with 3 specimen signature (Photocopy only) (Buyer &amp; Spouse)', 0, 1, 'L');
$pdf->SetXY(135, 165);
$pdf->Cell(65, 5, 'SSS, GSIS, Driver\'s License, Voter\'s, PRC, Passport', 0, 1, 'L');
$pdf->SetXY(135, 170);
$pdf->Cell(65, 5, 'Postal ID\'s are allowed for AIF only (or unemployed spouse)', 0, 1, 'L');
$pdf->SetXY(135, 175);
$pdf->Cell(65, 5, 'Passport - validity should not be expired (Buyer)', 0, 1, 'L');
$pdf->SetXY(135, 180);
$pdf->Cell(65, 5, 'Must have date of arrival & departure', 0, 1, 'L');
$pdf->SetXY(135, 185);
$pdf->Cell(65, 5, 'Residence Certificate for the Current Year (Cedula) (Spouse &amp; Atty-In-Fact)', 0, 1, 'L');
// End Requirements

$pdf->Output();
exit;
