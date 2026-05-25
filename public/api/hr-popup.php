<?php
/**
 * Proxy HR popup submissions to Google Apps Script — URL stays server-side only.
 * Set HR_GOOGLE_SHEET_URL in server environment.
 */
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$webappUrl = getenv('HR_GOOGLE_SHEET_URL');
if (!$webappUrl) {
    http_response_code(503);
    echo json_encode(['error' => 'Form service not configured']);
    exit;
}

$body = file_get_contents('php://input');

$ch = curl_init($webappUrl);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => $body,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_TIMEOUT => 15,
]);

$response = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE) ?: 502;
curl_close($ch);

http_response_code($code >= 200 && $code < 400 ? 200 : $code);
echo $response ?: json_encode(['ok' => true]);
