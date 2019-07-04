import React from 'react';

import img from '../../../asset/image/me1.png';
import './Perfil.scss';

export const Perfil = () => {
    return (
        <main className="perfil content-padding-y">
            <div className="container">
                <div className="row align-items-center justify-content-between no-gutters">
                    
                    <div className="flex1">
                        <img src={img}></img>
                    </div>

                    <div className="flex2">
                        <label>Nome</label>
                        <output>José da Silva</output>

                        <label>E-mail</label>
                        <output>josesilva@gmail.com</output>

                        <label>Telefone</label>
                        <output>(51)99999-9999</output>
                    </div>
                </div>
            </div>
        </main>
    );
};
