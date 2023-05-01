<?php
require_once('conet.php');
$con = new Conexion();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo "esto es get";
}
else{
    echo "esto no es get";
}
echo "llego al final";
?>