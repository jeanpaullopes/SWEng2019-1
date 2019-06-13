<?php
	class Rota{
		public $id;
		public $origem;
		public $destino;
		public $via;

		public function rota($dados){
			$this->id = date('YmdHis');
			$this->origem = $dados['origem'];
			$this->destino = $dados['destino'];
			$this->via = $dados['via'];
		}

		public function getId(){
			return $this->id;
		}

		public function getOrigem(){
			return $this->origem;
		}

		public function getDestino(){
			return $this->destino;
		}

		public function getVias(){
			return $this->vias;
		}
	}
?>