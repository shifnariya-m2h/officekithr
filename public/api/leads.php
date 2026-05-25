<?php
/**
 * Server-side proxy for Syncora leads — keeps API secrets off the client.
 * Set SYNCORA_API_KEY in server environment (cPanel → Environment Variables).
 */
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$apiKey = getenv('SYNCORA_API_KEY');
if (!$apiKey) {
    http_response_code(503);
    echo json_encode(['error' => 'Lead service not configured']);
    exit;
}

$body = file_get_contents('php://input');
$payload = json_decode($body, true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$ch = curl_init('https://app.syncoraai.com/api/leads/external');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'X-API-Key: ' . $apiKey,
    ],
    CURLOPT_POSTFIELDS => $body,
    CURLOPT_TIMEOUT => 15,
]);

$response = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE) ?: 502;
curl_close($ch);

http_response_code($code);
echo $response ?: json_encode(['error' => 'Upstream error']);
