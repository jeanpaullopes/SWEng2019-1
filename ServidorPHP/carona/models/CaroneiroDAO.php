<?php
    class CaroneiroDAO{
        private static $file = 'db/caroneiro.json';

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
            $id = @$obj['id'];
            $nome = @$obj['nome'];
            $dados = 0;
            if($id != 0){
                foreach($tabela as $key=>$dado){
                    if($id == $dado->id){
                        $dados = $dado;
                    }
                }
            }elseif(!empty($nome)){
                foreach($tabela as $key=>$dado){
                    if($nome == $dado->nome){
                        $dados = $dado;
                    }
                }
            }
            return $dados;
        }     
    }