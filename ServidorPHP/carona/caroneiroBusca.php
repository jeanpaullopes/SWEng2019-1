<?php
    require_once('class/Caroneiro.php');
    require_once('models/CaroneiroDAO.php');

    $body = file_get_contents('php://input');
    $json = json_decode($body, true);

    if($json){
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: X-Requested-With");
        header('content:application/json;charset=UTF8');
        
        $retorno = array(
            'data' => CaroneiroDAO::busca($json),
            'message' =>''
        );

        echo json_encode($retorno);
    }
?>