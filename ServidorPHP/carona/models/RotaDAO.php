<?php
    class RotaDAO{
        private static $file = 'db/rota.json';

        static function gravar($obj){
            $arquivo = file_get_contents(self::$file);
            $dados = json_decode($arquivo);

            $id = $obj->getId();
            if($dados != NULL){                
                $dados = get_object_vars($dados);
            }
            $dados[$id] = $obj;
            file_put_contents(self::$file,json_encode($dados));
        }

        static function busca($obj = NULL){
            $arquivo = file_get_contents(self::$file);
            $tabela = json_decode($arquivo);
            $dados = 0;
            if($id != 0){
                foreach($tabela as $key=>$dado){
                    if(){
                        
                    }
                }
            }
            return $dados;
        }     
    }