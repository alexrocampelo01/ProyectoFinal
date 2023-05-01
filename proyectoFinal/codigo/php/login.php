<?php
require_once('conet.php');
$con = new Conexion();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo "esto es get";
    echo "hola";
    try {
        echo"hola";
        $sql = "SELECT * FROM socios WHERE 1 ";
        $result = $con->query($sql);
        //comprovamos que alla resultado
        if($result->num_rows == 0 ){
            header("HTTP/1.1 406 Not Acceptable");
        }else{
        $usuario = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($usuario);
        }
    }
    catch (mysqli_sql_exception $e) {
        header("HTTP/1.1 404 Not Found");
    }
    exit;
}
else{
    echo "esto no es get";
}
echo "llego al final";
echo "<br><h1>nose no funciona</h1>";
?>