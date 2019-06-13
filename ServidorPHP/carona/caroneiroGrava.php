<?php
    require_once('class/Caroneiro.php');
    require_once('models/CaroneiroDAO.php');
 
    if(!empty($_GET['caroneiro'])){
        $json = json_decode($_GET['caroneiro'], true);
    }elseif(!empty($_POST)){
        $body = file_get_contents('php://input');
        $json = json_decode($body, true);
    }
    
    if($json){
        $caroneiro = new Caroneiro($json);
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST');
        header("Access-Control-Allow-Headers: X-Requested-With");
        header('content:application/json;charset=UTF8');
        
        CaroneiroDAO::gravar($caroneiro);

        $dado = array(
            'data' => $caroneiro,
            'message' =>''
        );

        echo json_encode($dado);
    }
?>