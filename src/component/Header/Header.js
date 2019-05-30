import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center justify-content-between no-gutters">
                    <div className="col-10 col-lg-5">
                        <ul>
                            <li>
                                <Link to="/">Início</Link>
                            </li>

                            <li>
                                <Link to="/pesquisar">Pesquisar Caronas</Link>
                            </li>

                            <li>
                                <Link to="/caronas">Minhas Caronas</Link>
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
