<?php
/* Application Middleware */

// Cross Domain Access
$app->add(function($request, $response, $next){
    $response = $next($request, $response);
    $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:9002');
    return $response;
});
