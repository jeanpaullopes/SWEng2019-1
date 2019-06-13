<?php

    if(!array_key_exists('path',$_GET)){
        echo 'erro, path missing';
        exit;
    }

    $path = explode('/',$_GET['path']);

    if(count($path)==0 || $path[0]==''){
        echo 'erro, path missing';
        exit;
    }

    $contents = file_get_contents('db/motorista.json');
    
    $json = json_decode($contents, true);    

    $param1 = "";
    if(count($path)>1){
        $param1 = $path[1];
        if($param1==""){
            echo json_encode($json[$path[0]]);
        }else{
            $encontrado = NULL;
            foreach($json[$path[0]] as $key => $obj){
                if($obj['id']==$param1){
                    echo 'encontrou';
                    break;
                }
            }
            if($encontrado >= 0){
                echo json_encode($json[$path[0]][$encontrado]);
            }else{
                echo 'error.';
                exit;
            }
        }
    }
    
    $method = $_SERVER['REQUEST_METHOD'];
    
    header('Conten-type: application/json');
    
    $body = file_get_contents('php://input');

    if($method === 'GET'){
        if($json[$path[0]]){
            echo json_encode($json[$path[0]]);
        }else{
            echo '[]';
        }
    }
    
    if($method === 'POST'){
        $jsonBody = json_decode($body,true);
    
        $jsonBody['id'] = time();
    
        if(!$json[$path[0]]){
            $json[$path[0]] = [];
        }
    
        $json[$path[0]][] = $jsonBody;
    
        echo json_encode($jsonBody);
    
        file_put_contents('db/usuario.json',json_encode($json));
    }
?>