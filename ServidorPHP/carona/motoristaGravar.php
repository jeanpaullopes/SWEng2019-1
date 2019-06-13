<?php
    require_once('class/Motorista.php');
    require_once('models/MotoristaDAO.php');
 
    $body = file_get_contents('php://input');
    $json = json_decode($body, true);
    
    if($json){
        $motorista = new Motorista($json);
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: X-Requested-With");
        header('content:application/json;charset=UTF8');
        
        MotoristaDAO::gravar($motorista);

        $dado = array('data' => $motorista,'message' =>'');

            echo json_encode($dado);
    }
?>