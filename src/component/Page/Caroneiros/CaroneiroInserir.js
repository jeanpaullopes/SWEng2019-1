import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Caroneiro.scss';

export const AddUserForm = (props) => {
    const initialFormState = { id: 0, nome: '', fone: '', email: '' };
    const [caroneiro, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { nome, value } = event.target;

        setUser({ ...caroneiro, [nome]: value });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                if (!caroneiro.nome || !caroneiro.fone) return;

                props.addUser(caroneiro);

                setUser(initialFormState);
            }}
        >
            <label>Nome</label>
            <input type="text" name="nome" value={caroneiro.name} onChange={handleInputChange} />

            <label>Fone</label>
            <input type="text" name="fone" value={caroneiro.fone} onChange={handleInputChange} />

            <label>Email</label>
            <input type="text" name="email" value={caroneiro.email} onChange={handleInputChange} />

            <label>Sexo</label>
            <input type="radio" name="sexo" value={caroneiro.sexo} onChange={handleInputChange} />
            <input type="radio" name="sexo" value={caroneiro.sexo} onChange={handleInputChange} />

            <label>Cidade</label>
            <input type="text" name="cidade" value={caroneiro.cidade} onChange={handleInputChange} />

            <button type="submit">Inserir novo caroneiro</button>
        </form>
    );
};
