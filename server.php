<?php

$database = file_get_contents(__DIR__ . '/dischi.json');


$dischi = json_decode($database);


header('Content-Type: application/json');
echo json_encode($dischi);
