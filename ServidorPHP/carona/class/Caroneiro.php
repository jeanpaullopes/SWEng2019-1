<?php
	require('usuario.php');
	class Caroneiro extends Usuario{
		public $destinoPadrao;
	
		// construtor
		public function __construct($caroneiro){
			/*if(empty($caroneiro['id']) || $caroneiro['id'] == 0){
				$this->id = date('YmdHis');
			}else{
				$this->id = $caroneiro['id'];
			}*/

			$this->id = date('YmdHis');
			$this->email = $caroneiro['email'];
			$this->fone = $caroneiro['fone'];
			$this->nome = $caroneiro['nome'];
			$this->sexo = $caroneiro['sexo'];
			$this->cidade = $caroneiro['cidade'];
			$this->destinoPadrao = $caroneiro['destinoPadrao'];
		}

		// gets
		public function getDestinoPadrao(){
			return $this->destinoPadrao;
		}

		public function getJson(){
			return json_encode($this);			 
		}
	}
?>