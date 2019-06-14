import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center justify-content-between no-gutters">
                    <div className="col-12">
                        <ul>
                            <li>
                                <Link to="/">Início</Link>
                            </li>

                            <li>
                                <Link to="/caronas">Pesquisar Caronas</Link>
                            </li>

                            <li>
                                <Link to="/caroneiros">Pesquisar Caroneiros</Link>
                            </li>

                            <li>
                                <Link to="/caroneiro-inserir">Inserir Caroneiro</Link>
                            </li>

                            <li>
                                <Link to="/minhas-caronas">Minhas Caronas</Link>
                            </li>

                            <li>
                                <Link to="/perfil">Perfil</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};
