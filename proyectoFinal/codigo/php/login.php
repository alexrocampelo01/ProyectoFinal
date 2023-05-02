<?php
require_once('conet.php');
$con = new Conexion();
//======================================================================================================
// metodo get
//======================================================================================================
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo "esto es get";
    try {
        echo"hola";
        $sql = "SELECT * FROM socios WHERE 1";
        $result = $con->query($sql);
        //comprovamos que alla resultado
        // if($result->num_rows == 0 ){
            //     header("HTTP/1.1 406 Not Acceptable");
            // }else{
                // }
                $usuario = $result->fetch_all(MYSQLI_ASSOC);
                print_r($sql);
                echo json_encode($usuario);
            }
            catch (mysqli_sql_exception $e) {
                header("HTTP/1.1 404 Not Found");
            }
            exit;
        }
//======================================================================================================
// metodo post
//======================================================================================================
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    echo "esto es post";
    $json = file_get_contents('php://input');
}
//======================================================================================================
// metodo put
//======================================================================================================
if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    echo "esto es post";
}
//======================================================================================================
// metodo Delete
//======================================================================================================
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    echo "esto es post";
}
else{
    echo "no soy nada registrado";
}
echo "llego al final";
echo "<br><h1>nose no funciona</h1>";
// ejemplo consulta insertar socio
// INSERT INTO `socios` (`id_s`, `nomUsu`, `pass`, `nombre`, `apellido1`, `apellido2`, `curso`, `nomPadre`, `tlfPadre`, `nomMadre`, `tlfMadre`, `direccion`, `fechaNac`, `observaciones`) VALUES (NULL, 'diegolobo', 'diegolobo', 'diego', 'llorente', 'lobo', '6', 'marcos llorente', '999888777', 'sofia lobo', '666111222', 'palomeria 2 3d', '2015-05-20', 'niño calmado');
// ejemplo insertar monitor
// INSERT INTO `monitor` (`id_m`, `nomUsu`, `pass`, `nombre`, `apellido1`, `apellido2`, `tlf`, `curso`, `carne_conducir`, `titulo_monitor`) VALUES (NULL, 'alex', 'alex', 'alejandro', 'rodriguez', 'campelo', '658470620', '4epo', '1', '0');

?>
