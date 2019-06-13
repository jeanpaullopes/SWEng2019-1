<?php
	class carona{
		private $id;
		private $motorista;
		private $caroneiros;
		private $status;
		private $horarioPartida;
		private $vagas;

		public function carona($id, $motorista, $caroneiros, $cancelada, $horarioPartida, $vagas){
			$this->id = $id;
			$this->motorista = $motorista;
			$this->caroneiro = $caroneiros;
			$this->cancelada = $cancelada;
			$this->horarioPartida = $horarioPartida;
			$this->vagas = $vagas;
		}

		public function getId(){
			return $this->id;
		}

		public function getMotorista(){
			return $this->motorisa;
		}

		public function getCaroneiros(){
			return $this->caroneiros;
		}

		public function getCancelada(){
			return $this->cancelda;
		}

		public function gethorarioPartida(){
			return $this->horarioPartida;
		}

		public function getVagas(){
			return $this->vagas;
		}

		public function addCaroneiro($caroneiro){
			return $caroneiro;
		}

		public function addCaroneiro($caroneiro){
			return 
		}

		public function getVagasDisponivel(){
			return $vagasDisponivel;
		}

		public function cancel(){
			return $this->status;
		}
	}
?>