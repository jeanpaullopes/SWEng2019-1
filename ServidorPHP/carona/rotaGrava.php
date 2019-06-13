<?php
    require_once('class/Rota.php');
    require_once('models/RotaDAO.php');
 
    $body = file_get_contents('php://input');
    $json = json_decode($body, true);
  
    if($json){        
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: X-Requested-With");
        header('content:application/json;charset=UTF8');

        $rota = new Rota($json);
        
        RotaDAO::gravar($rota);

        $dado = array(
            'data' => $rota,
            'message' =>''
        );

        echo json_encode($dado);
    }
?>