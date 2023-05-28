<?php
require_once('conet.php');
$con = new Conexion();
$sql = "SELECT * FROM usuario WHERE 1 ";
//======================================================================================================
// metodo get
//======================================================================================================
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    //echo "esto es get";
    try {
        //echo"hola";
        $sql = "SELECT * FROM actividades WHERE 1";
        if (isset($_GET['idAct'])) {
            $id_act = $_GET['idAct'];
            $sql = "SELECT * FROM `actividades` WHERE 1 and id_a='$id_act';";
        } else if (isset($_GET['fechaBus'])) {
            $fecha = $_GET['fechaBus'];
            $sql = "SELECT * FROM `actividades` WHERE 1 AND fecha >= '$fecha 00:00:00' AND fecha <= '$fecha 23:59:59'; ";
        } else if (isset($_GET['fechaIni']) && isset($_GET['fechaFin'])){
            $fechaInicio = $_GET['fechaIni'];
            $fechaFinal = $_GET['fechaFin'];
            $sql = "SELECT * FROM `actividades` WHERE 1 and fecha >= '$fechaInicio' AND fecha <= '$fechaFinal';";
        }
        $result = $con->query($sql);
        if ($result->num_rows != 0) {
            $actividades = $result->fetch_all(MYSQLI_ASSOC);
            //print_r($sql);
            echo json_encode($actividades);
        }else{
            header("HTTP/1.1 204 No Content");
        }
    } catch (mysqli_sql_exception $e) {
        header("HTTP/1.1 404 Not Found");
    }
    exit;
}
//======================================================================================================
// metodo post
//======================================================================================================
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //echo "esto es post";
    $json = file_get_contents('php://input');
    $usuario = json_decode($json);
    //print_r($usuario);
    //echo "algo";
    //variables para guardar los ussuarios
    //$creador_id = $usuario->nomUsu;
    $fecha = $usuario->fecha;
    $lugar = $usuario->lugar;
    $curso = $usuario->curso;
    $titulo = $usuario->titulo;
    $des = $usuario->des;
    try {
        $sql = "INSERT INTO `actividades` (`id_a`, `creador_id`, `fecha`, `lugar`, `curso`, `titulo`, `descripcion`)
         VALUES (NULL, '1', '$fecha', '$lugar',
          '$curso', '$titulo', '$des');";
        //echo $sql;  
        $con->query($sql);
        header("HTTP/1.1 200 OK");
        echo json_encode($con->insert_id);
    } catch (mysqli_sql_exception $e) {
        echo $e;
    }
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
} else {
    //echo "no soy nada registrado";
}
//echo "llego al final";
//echo "<br><h1>nose no funciona</h1>";
// ejemplo consulta insertar socio
// INSERT INTO `socios` (`id_s`, `nomUsu`, `pass`, `nombre`, `apellido1`, `apellido2`, `curso`, `nomPadre`, `tlfPadre`, `nomMadre`, `tlfMadre`, `direccion`, `fechaNac`, `observaciones`) VALUES (NULL, 'diegolobo', 'diegolobo', 'diego', 'llorente', 'lobo', '6', 'marcos llorente', '999888777', 'sofia lobo', '666111222', 'palomeria 2 3d', '2015-05-20', 'niño calmado');
// ejemplo insertar monitor
// INSERT INTO `monitor` (`id_m`, `nomUsu`, `pass`, `nombre`, `apellido1`, `apellido2`, `tlf`, `curso`, `carne_conducir`, `titulo_monitor`) VALUES (NULL, 'alex', 'alex', 'alejandro', 'rodriguez', 'campelo', '658470620', '4epo', '1', '0');
