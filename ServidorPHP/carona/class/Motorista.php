<?php
	require('usuario.php');
	class Motorista extends Usuario{
		private $vagas;

		// construtor
		public function __construct($dados){
			$this->id = date('YmdHis');
			$this->email = $dados['email'];
			$this->fone = $dados['fone'];
			$this->nome = $dados['nome'];
			$this->sexo = $dados['sexo'];
			$this->cidade = $dados['cidade'];
			$this->vagas = $dados['vagas'];
		}

		//gets
		public function getVagas(){
			return $this->vagas;
		}		
	}
?>