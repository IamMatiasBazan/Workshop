<?php
$host="127.0.0.1";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="workshop";

$conexion = new mysqli($host, $user, $password, $dbname, $port, $socket);

$tablaContacto = "contacto";

if($conexion -> connect_errno) {
    echo "El sitio experimenta fallos";
    exit();
}
	
?>