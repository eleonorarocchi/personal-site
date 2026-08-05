---
title: "WebService in PHP? Sì, è possibile!"
date: "2019-12-17"
slug: "webservice-in-php-si-e-possibile"
wordpress_id: 299
---

Creare un WebService in PHP non è solo possibile, ma possibilissimo!

Per farlo si può sfruttare la libreria [Nusoap](https://sourceforge.net/projects/nusoap/).

Questo è un esempio di webservice:

```
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:*");
require_once "lib/nusoap.php"; // richiamiamo la libreria NuSOAP
require_once "include_dao.php"; // richiamiamo la libreria phpdao

$server = new soap_server();
$server->configureWSDL("PredictiveUrlPreloadXML", "urn:PredictiveUrlPreloadXMLwsdl");
$server->wsdl->schemaTargetNamespace = "urn:PredictiveUrlPreloadXMLwsdl";

function helloWorld($username) {
	
	return 'Ciao '.$username;
}

$server->register(
	'helloWorld',                                     
	array(                                     
		'username'	=> 'xsd:string'
	),               
	array(
		'return'	=> 'xsd:string'
	),             
	'urn:PredictiveUrlPreloadXMLwsdl',              
	'urn:PredictiveUrlPreloadXMLwsdl#helloWorld',
	'rpc',                                     
	'encoded',                                      
	'Metodo di prova.'    
);

if ( !isset( $HTTP_RAW_POST_DATA ) ) 
	$HTTP_RAW_POST_DATA =file_get_contents( 'php://input' );
$server->service($HTTP_RAW_POST_DATA);
```

Questo è un esempio di client:

```
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    //$.ajax({url: "http://localhost:801/phpdao/api/webservice.php", success: function(result){
//      $("#div1").html(result);
    //}});
	
	

    $.ajax({
        url: "http://localhost:801/phpdao/api/webservice.php",
        type: "POST",
        contentType: "text/xml", 
		dataType: "text",
        data: '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'+
            '<soap:Body>'+
                '<helloWorld xmlns="urn:PredictiveUrlPreloadXMLwsdl">'+
                    '<username>Pluto</username>'+
                '</helloWorld>'+
            '</soap:Body>'+
        '</soap:Envelope>', 
        success: function(data) {
		   $("#div1 h2").html(data);
        },
        error: function (xhr, textStatus, error) {
            console.log(xhr);
        }
    });

  });
});
</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button>Get External Content</button>

</body>
</html>
```
