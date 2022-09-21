<?php 
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $btnEnviar = $_POST['btnEnviar'];

    if(isset($btnEnviar)) {
        echo "Presionado el boton";
    }
?>