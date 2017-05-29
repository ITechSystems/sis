<?php

$pdf = new \App\PDF;
$pdf->ShowGrid(false);

$pdf->AddPage('L', 'Legal');
$pdf->SetFont('Arial', '', 8);

$pdf->SetXY(5, 5);
$pdf->Cell(40, 15, 'Company Logo', 1, 1, 'C');

$pdf->SetXY(115, 5);
$pdf->Cell(60, 5, 'Prepared By: ' . $aidaMap->user->first_name . ' ' . $aidaMap->user->last_name, 0, 1, 'L');
$pdf->SetXY(115, 10);
$pdf->Cell(60, 5, 'Contact No: ' . $aidaMap->user->contact_number, 0, 1, 'L');
$pdf->SetXY(115, 15);
$pdf->Cell(60, 5, 'Email: ' . $aidaMap->user->email, 0, 1, 'L');

$pdf->SetXY(175, 5);
$pdf->Cell(60, 5, 'Developer: ' . $aidaMap->unit->developer, 0, 1, 'L');
$pdf->SetXY(175, 10);
$pdf->Cell(60, 5, 'Project: ' . $aidaMap->unit->project, 0, 1, 'L');
$pdf->SetXY(175, 15);
$pdf->Cell(60, 5, 'Location: ' . $aidaMap->unit->location, 0, 1, 'L');

$pdf->SetXY(115, 25);
$pdf->SetFont('Arial', 'B', 8);
$pdf->SetFillColor(219, 219, 219);
$pdf->Cell(60, 10, 'BUYER\'S COMPUTATIONS FOR', 0, 1, 'L', 1);
$pdf->SetFont('Arial', '', 8);
$pdf->SetXY(115, 35);
$pdf->Cell(60, 5, $aidaMap->buyer->fullName(), 0, 1, 'L');
$pdf->SetXY(115, 40);
$pdf->Cell(60, 5, $aidaMap->buyer->mobile, 0, 1, 'L', 1);
$pdf->SetXY(115, 45);
$pdf->Cell(60, 5, $aidaMap->buyer->email, 0, 1, 'L');
$pdf->SetXY(115, 50);
$pdf->Cell(60, 5, $aidaMap->buyer->marital_status, 0, 1, 'L', 1);
$pdf->SetXY(115, 55);
$pdf->Cell(60, 5, $aidaMap->buyer->financing_type, 0, 1, 'L');
$pdf->SetXY(115, 60);
$pdf->Cell(60, 5, $aidaMap->buyer->work_type, 0, 1, 'L', 1);
$pdf->SetXY(115, 65);
$pdf->Cell(60, 5, $aidaMap->buyer->country, 0, 1, 'L');
$pdf->SetXY(115, 70);
$pdf->Cell(60, 5, $aidaMap->buyer->equity_type, 0, 1, 'L', 1);

$photo = $aidaMap->unit->unitPhotos->where('developer', $aidaMap->unit->developer)->first();
if ($photo) {
    $pdf->Image(unitPhotoPath($photo->developer, $photo->unit, $photo->filename), 180, 25, 55, 50);
}

$photo = $aidaMap->unit->mapPhotos->where('developer', $aidaMap->unit->developer)->first();
if ($photo) {
    $pdf->Image(mapPhotoPath($photo->developer, $photo->phase, $photo->filename), 115, 80, 120, 95);
}

$pdf->SetXY(240, 5);
$pdf->SetFont('Arial', 'B', 8);
$pdf->Cell(110, 10, 'FOR RESERVATIONS, CONTACT US AT', 0, 1, 'C', 1);

$developer = $aidaMap->unit->developer()->first();
$branches = $developer->branchOffices;

$pdf->SetFont('Arial', '', 8);
$pdf->SetXY(240, 15);
$pdf->SetFont('Arial', 'B', 8);
$pdf->Cell(110, 5, $developer->contact_person, 0, 1, 'L');
$pdf->SetFont('Arial', '', 8);
$pdf->SetXY(240, 20);
$pdf->Cell(110, 5, $developer->contact_number_one, 0, 1, 'L');
$pdf->SetXY(240, 25);
$pdf->Cell(110, 5, $developer->contact_number_two, 0, 1, 'L');
$pdf->SetXY(240, 30);
$pdf->SetFont('Arial', 'B', 8);
$pdf->Cell(110, 5, 'LANDLINE HOTLINES', 0, 1, 'L');
$pdf->SetFont('Arial', '', 8);
$pdf->SetXY(240, 35);
$pdf->Cell(110, 5, 'Main Office Telephone: ' . $developer->land_line, 0, 1, 'L');
$pdf->SetXY(240, 40);
$pdf->Cell(110, 5, 'Branch Office Telephone: ' . $branches[0]->land_line, 0, 1, 'L');

$pdf->SetXY(240, 50);
$pdf->SetFont('Arial', 'B', 8);
$pdf->Cell(110, 5, 'MAIN OFFICE', 0, 1, 'L');
$pdf->SetFont('Arial', '', 8);
$pdf->SetXY(240, 55);
$pdf->Cell(110, 5, $developer->address, 0, 1, 'L');

$pdf->SetXY(240, 65);
$pdf->SetFont('Arial', 'B', 8);
$pdf->Cell(110, 5, 'BRANCH OFFICE', 0, 1, 'L');
$pdf->SetFont('Arial', '', 8);
$pdf->SetXY(240, 70);
$pdf->Cell(110, 5, $branches[0]->address, 0, 1, 'L');

$pdf->SetXY(240, 80);
$pdf->SetFont('Arial', 'B', 8);
$pdf->Cell(110, 10, 'DOCUMENTARY REQUIREMENTS FOR ' . $aidaMap->buyer->financing_type . '/' . $aidaMap->buyer->marital_status . '/' . $aidaMap->buyer->work_type, 0, 1, 'C', 1);
$pdf->SetFont('Arial', '', 8);
$buyerRequirements = $aidaMap->buyer->requirements();
foreach ($buyerRequirements as $index => $buyerRequirement) {
    $pdf->SetXY(240, 90 + ($index * 5));
    $pdf->Cell(110, 5, $buyerRequirement->requirement->name, 0, 1, 'L');
}

$photo = $aidaMap->unit->photos->first();
if ($photo) {
    $pdf->Image(houseModelPhotoPath($photo->developer, $photo->house_model_name, $photo->filename), 5, 25, 105, 70);
}

$pdf->SetXY(5, 100);
$pdf->Cell(80, 5, 'BLOCK AND LOT', 1, 'L');
$pdf->SetXY(85, 100);
$pdf->Cell(25, 5, $aidaMap->unit->block_lot, 1, 'L');

$pdf->SetXY(5, 105);
$pdf->Cell(80, 5, 'LOT AREA', 1, 'L');
$pdf->SetXY(85, 105);
$pdf->Cell(25, 5, $aidaMap->unit->lot_area . ' SQM', 1, 'L');

$pdf->SetXY(5, 110);
$pdf->Cell(80, 5, 'LOT TYPE', 1, 'L');
$pdf->SetXY(85, 110);
$pdf->Cell(25, 5, $aidaMap->unit->lot_type, 1, 'L');

$pdf->SetXY(5, 115);
$pdf->Cell(80, 5, 'FLOOR AREA', 1, 'L');
$pdf->SetXY(85, 115);
$pdf->Cell(25, 5, $aidaMap->unit->floor_area . ' SQM', 1, 'L');

$pdf->SetXY(5, 120);
$pdf->Cell(80, 5, 'HOUSE MODEL', 1, 'L');
$pdf->SetXY(85, 120);
$pdf->Cell(25, 5, $aidaMap->unit->house_model, 1, 'L');

$pdf->SetXY(5, 125);
$pdf->Cell(80, 5, 'TOTAL CONTRACT PRICE', 1, 'L');
$pdf->SetXY(85, 125);
$pdf->Cell(25, 5, '3,060,320.00', 1, 1, 'R');

$pdf->SetXY(5, 130);
$pdf->Cell(80, 5, 'RESERVATION FEE', 1, 'L');
$pdf->SetXY(85, 130);
$pdf->Cell(25, 5, number_format($aidaMap->unit->reservation_fee, 2), 1, 1, 'R');

$pdf->SetXY(5, 135);
$pdf->Cell(30, 15, 'DOWNPAYMENT', 1, 1, 'C');

$pdf->SetXY(35, 135);
$pdf->Cell(50, 5, $aidaMap->unit->downpayment->percentage . '% Equity', 1, 1, 'C');
$pdf->SetXY(85, 135);
$pdf->Cell(25, 5, number_format($aidaMap->unit->downpayment->equity, 2), 1, 1, 'R');

$pdf->SetXY(35, 140);
$pdf->Cell(50, 5, 'Terms', 1, 1, 'C');
$pdf->SetXY(85, 140);
$pdf->Cell(25, 5, $aidaMap->unit->downpayment->term, 1, 1, 'R');

$pdf->SetXY(35, 145);
$pdf->Cell(50, 5, 'Amount/Month', 1, 1, 'C');
$pdf->SetXY(85, 145);
$pdf->Cell(25, 5, number_format($aidaMap->unit->downpayment->monthly, 2), 1, 1, 'R');

$pdf->SetXY(5, 150);
$pdf->Cell(30, 10 + ($aidaMap->unit->loans->where('finance_type', $aidaMap->finance_type)->count() * 5), 'LOAN', 1, 1, 'C');

foreach($aidaMap->unit->loans->unique('total') as $loan) {
    $pdf->SetXY(35, 150);
    $pdf->Cell(50, 5, 'Loanable Amount', 1, 1, 'C');
    $pdf->SetXY(85, 150);
    $pdf->Cell(25, 5, number_format($loan->total, 2), 1, 1, 'R');

    $pdf->SetXY(35, 155);
    $pdf->Cell(50, 5, 'MRI & FIRE', 1, 1, 'C');
    $pdf->SetXY(85, 155);
    $pdf->Cell(25, 5, number_format($loan->mri, 2), 1, 1, 'R');
}

foreach($aidaMap->unit->loans as $index => $loan) {
    $pdf->SetXY(35, 160 + ($index * 5));
    $pdf->Cell(25, 5, $loan->percentage . '%', 1, 1, 'C');
    $pdf->SetXY(60, 160 + ($index * 5));
    $pdf->Cell(25, 5, $loan->years . ' years', 1, 1, 'C');
    $pdf->SetXY(85, 160 + ($index * 5));
    $pdf->Cell(25, 5, number_format($loan->monthly_amortization, 2), 1, 1, 'R');
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
