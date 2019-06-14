import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Caroneiro.scss';

export const CaroneiroInserir = (props) => {
    const initialFormState = { id: 0, nome: '', fone: '', email: '', sexo: 'm', cidade: '' };
    const [caroneiro, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUser({ ...caroneiro, [name]: value });
    };

    return (
        <form
            className="container"
            onSubmit={(event) => {
                event.preventDefault();

                console.log(caroneiro);

                if (!caroneiro.nome || !caroneiro.fone) return;

                axios
                    .post('http://172.29.1.186/carona/caroneiroGrava.php', caroneiro)
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
                <div className="col-12 col-sm-6">
                    <label>Nome</label>
                    <input type="text" name="nome" value={caroneiro.nome} onChange={handleInputChange} />
                </div>

                <div className="col-12 col-sm-6">
                    <label>Fone</label>
                    <input type="text" name="fone" value={caroneiro.fone} onChange={handleInputChange} />
                </div>

                <div className="col-12 col-sm-6">
                    <label>Email</label>
                    <input type="text" name="email" value={caroneiro.email} onChange={handleInputChange} />
                </div>

                <div className="col-12 col-sm-6">
                    <span>Sexo</span>

                    <label htmlFor="m">Marculino</label>
                    <input type="radio" id="m" name="sexo" value="m" />

                    <label htmlFor="f">Feminino</label>
                    <input type="radio" id="f" name="sexo" value="f" />
                </div>

                <div className="col-12 col-sm-6">
                    <label>Cidade</label>
                    <input type="text" name="cidade" value={caroneiro.cidade} onChange={handleInputChange} />
                </div>

                <div className="col-12">
                    <button type="submit">Inserir novo caroneiro</button>
                </div>
            </div>
        </form>
    );
};
