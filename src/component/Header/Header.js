import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
    return (
        <header>
            <div className="container padding">
                <div className="row align-items-center justify-content-between no-gutters">
                    <div className="col-12">
                        <ul>
                            <li>
                                <Link to="/">
                                    <button type="button" className="btn btn-outline-primary">
                                        Início
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link to="/caronas">
                                    <button type="button" className="btn btn-outline-primary">
                                        Pesquisar Caronas
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link to="/caroneiros">
                                    <button type="button" className="btn btn-outline-primary">
                                        Pesquisar Caroneiros
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link to="/caroneiro-inserir">
                                    <button type="button" className="btn btn-outline-primary">
                                        Inserir Caroneiro
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link to="/minhas-caronas">
                                    <button type="button" className="btn btn-outline-primary">
                                        Minhas Caronas
                                    </button>
                                </Link>
                            </li>

                            <li>
                                <Link to="/perfil">
                                    <button type="button" className="btn btn-outline-primary">
                                        Perfil
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};
