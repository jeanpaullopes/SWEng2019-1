<?php
    require_once('class/Motorista.php');
    require_once('models/MotoristaDAO.php');

    $body = file_get_contents('php://input');
    $json = json_decode($body, true);

    if($json){
        header('content:application/json;charset=UTF8');
        
        $retorno = array(
            'data' => MotoristaDAO::busca($json),
            'message' =>''
        );

        echo json_encode($retorno);
    }
?>