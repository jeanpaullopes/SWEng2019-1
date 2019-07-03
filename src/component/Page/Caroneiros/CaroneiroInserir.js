import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Caroneiro.scss';

export const CaroneiroInserir = (props) => {
    const initialFormState = { id: 0, nome: '', fone: '', email: '', sexo: 'm', cidade: '', destinoPadrao: '' };
    const [caroneiro, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUser({ ...caroneiro, [name]: value });
    };

    return (
        <div className="container">
            <div className="row slider-text align-items-center justify-content-center">
                <h5>Novo Caroneiro</h5>
            </div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();

                    console.log(caroneiro);

                    if (!caroneiro.nome || !caroneiro.fone) return;

                    axios
                        .post('http://172.29.1.186/carona/caroneiroGrava.php', caroneiro, { headers: { 'Access-Control-Allow-Origin': '*' } })
                        .then(function(response) {
                            console.log(response);
                        })
                        .catch(function(error) {
                            console.log(error);
                        });

                    setUser(initialFormState);
                }}
            >
                <div className="row align-items-center justify-content-between">
                    <div className="form-group col-12 col-sm-6">
                        <label className="my-1 mr-2">Nome</label>
                        <input className="form-control" type="text" name="nome" value={caroneiro.nome} onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-12 col-sm-6">
                        <label>Fone</label>
                        <input className="form-control" type="text" name="fone" value={caroneiro.fone} onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-12 col-sm-6">
                        <label>Email</label>
                        <input className="form-control" type="text" name="email" value={caroneiro.email} onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-12 col-sm-6">
                        <label>Destino Padrão</label>
                        <input className="form-control" type="text" name="destinoPadrao" value={caroneiro.destinoPadrao} onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-12 col-sm-6">
                        <label>Cidade</label>
                        <input className="form-control" type="text" name="cidade" value={caroneiro.cidade} onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-12 col-sm-6">
                        <label>Sexo</label>

                        <div>
                            <label htmlFor="m">Marculino</label>
                            <input type="radio" id="m" name="sexo" value="m" />

                            <label htmlFor="f">Feminino</label>
                            <input type="radio" id="f" name="sexo" value="f" />
                        </div>
                    </div>

                    <div className="form-group col-12">
                        <button type="submit">Inserir</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
