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
                                <Link to="/"><button className="btn btn-primary btn-sm">Início</button></Link>
                            </li>

                            <li>
                                <Link to="/caronas"><button className="btn btn-primary btn-sm">Pesquisar Caronas</button></Link>
                            </li>

                            <li>
                                <Link to="/caroneiros"><button className="btn btn-primary btn-sm">Pesquisar Caroneiros</button></Link>
                            </li>

                            <li>
                                <Link to="/caroneiro-inserir"><button className="btn btn-primary btn-sm">Inserir Caroneiro</button></Link>
                            </li>

                            <li>
                                <Link to="/minhas-caronas"><button className="btn btn-primary btn-sm">Minhas Caronas</button></Link>
                            </li>

                            <li>
                                <Link to="/perfil"><button className="btn btn-primary btn-sm">Perfil</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};
