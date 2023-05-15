<?php
require_once('conet.php');
$con = new Conexion();

    $sql = "SELECT * FROM usuario WHERE 1 ";
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
    //echo "esto es post";
    $json = file_get_contents('php://input');
    $usuario = json_decode($json);
    //variables para guardar los ussuarios
    if($usuario->tipoUsu == "socio"){
        $nomUsu = $usuario->nomUsu;
        $pass = $usuario->pass;
        $nom = $usuario->nom;
        $apel1 = $usuario->apel1;
        $apel2 = $usuario->apel2;
        $curso = $usuario->curso;
        $nomP = $usuario->nomP;
        $tlfP = $usuario->tlfP;
        $nomM = $usuario->nomM;
        $tlfM = $usuario->tlfM;
        $dir = $usuario->dir;
        $fechNac = $usuario->fechNac;
        $observaciones = $usuario->observaciones;
        try{
            $sql = "INSERT INTO `socios` (`id_s`, `nomUsu`, `pass`, `nombre`, `apellido1`, `apellido2`, `curso`, `nomPadre`, `tlfPadre`, `nomMadre`, `tlfMadre`, `direccion`, `fechaNac`, `observaciones`)
            VALUES (NULL, '$nomUsu', '$pass', '$nom', '$apel1'
            , '$apel2', '$curso', '$nomP', '$tlfP', '$nomM'
            , '$tlfM', '$dir', '$fechNac', '$observaciones');";
        //echo $sql;  
        $con->query($sql);
        header("HTTP/1.1 200 OK");
        echo json_encode($con->insert_id);
        }catch(mysqli_sql_exception $e){
            echo $e;
        }
    }
    if($usuario->tipoUsu == "monitor"){
        $nomUsu = $usuario->nomUsu;
        $pass = $usuario->pass;
        $nom = $usuario->nom;
        $apel1 = $usuario->apel1;
        $apel2 = $usuario->apel2; 
        $curso = $usuario->curso;
        $tlf = $usuario->tlf;
        $tituloM = $usuario->tituloM;
        $carneC = $usuario->carneC;
        try{
            $sql = "INSERT INTO `monitor` (`id_m`, `nomUsu`, `pass`, `nombre`, `apellido1`, `apellido2`, `tlf`, `curso`, `carne_conducir`, `titulo_monitor`)
             VALUES (NULL, '$nomUsu', '$pass', '$nom',
              '$apel1', '$apel2', '$curso ',
               '$tlf ', '$tituloM', '$carneC');";
            echo $sql;  
            $con->query($sql);
            header("HTTP/1.1 200 OK");
            echo json_encode($con->insert_id);
        }catch(mysqli_sql_exception $e){
            echo $e;
        }
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
}
else{
    //echo "no soy nada registrado";
}
//echo "llego al final";
//echo "<br><h1>nose no funciona</h1>";
// ejemplo consulta insertar socio
// INSERT INTO `socios` (`id_s`, `nomUsu`, `pass`, `nombre`, `apellido1`, `apellido2`, `curso`, `nomPadre`, `tlfPadre`, `nomMadre`, `tlfMadre`, `direccion`, `fechaNac`, `observaciones`) VALUES (NULL, 'diegolobo', 'diegolobo', 'diego', 'llorente', 'lobo', '6', 'marcos llorente', '999888777', 'sofia lobo', '666111222', 'palomeria 2 3d', '2015-05-20', 'niño calmado');
// ejemplo insertar monitor
// INSERT INTO `monitor` (`id_m`, `nomUsu`, `pass`, `nombre`, `apellido1`, `apellido2`, `tlf`, `curso`, `carne_conducir`, `titulo_monitor`) VALUES (NULL, 'alex', 'alex', 'alejandro', 'rodriguez', 'campelo', '658470620', '4epo', '1', '0');

?>
