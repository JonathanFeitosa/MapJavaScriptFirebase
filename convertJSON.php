<?php

// No Use Cache Browser
$gmtDate = gmdate("D, d M Y H:i:s");
header("Expires: {$gmtDate} GMT");
header("Last-Modified: {$gmtDate} GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");

$jLink = $_REQUEST["jLink"];

$ch = curl_init();
$timeout = 0;
$resultado = " ";
curl_setopt($ch, CURLOPT_URL,   "https://trip.uber.com/${jLink}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'));
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
$conteudo = curl_exec($ch);
curl_close($ch);

$semParteEsquerda = trim(substr($conteudo, strpos($conteudo, "__REDUX_STATE__") + 22));
$semParteDireita = trim(substr($semParteEsquerda, 0, strrpos($semParteEsquerda, "<script id=\"__ROUTER_DATA__")));
$semScript = trim(substr($semParteDireita, 0, strrpos($semParteDireita, "</script>")));
$removeDecoder = str_replace("\\u0022", "\"", trim($semScript));

echo $removeDecoder;

?>