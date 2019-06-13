<?php
	abstract class Usuario{
		public $id;
		public $email;
		public $fone;
		public $nome;
		public $sexo;
		public $cidade;

		//construtor
		public function usuario($id, $email, $fone, $nome, $sexo, $cidade){
			$this->id = $id;
			$this->email = $email;
			$this->fone = $fone;
			$this->nome = $nome;
			$this->sexo = $sexo;
			$this->cidade = $cidade;		
		}

		//gets
		public function getId(){
			return $this->id;
		}

		public function getEmail(){
			return $this->email;
		}

		public function getFone(){
			return $this->fone;
		}

		public function getNome(){
			return $this->nome;
		}

		public function getSexo(){
			return $this->sexo;
		}

		public function getCidade(){
			return $this->cidade;
		}
	}
?>