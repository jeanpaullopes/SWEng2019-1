import React from 'react';

import './Footer.scss';

export const Footer = () => {
    return (
        <footer className="content-padding-y">
            <div className="container">
                <div className="row align-items-center justify-content-between no-gutters">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-4 mb-5">
                                <h3>Sobre a Aplicação</h3>
                                <p className="mb-5">Trabalho final da Matéria Engenharia de Software 2019/1.</p>
                                <ul className="list-unstyled footer-link d-flex footer-social">
                                    <li>
                                        <img className="img-fluid" />
                                    </li>
                                </ul>
                            </div>

                            <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                                <h3>Links Rápidos</h3>
                                <ul className="list-unstyled footer-link">
                                    <li>
                                        <a href="#">Voltar ao Topo</a>
                                    </li>
                                    <li>
                                        <a href="sobre.html">Sobre</a>
                                    </li>
                                    <li>
                                        <a href="contato.html">Contato</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3"></div>
                        </div>

                        <div className="row">
                            <div className="col-12 text-md-center text-left">
                                <p>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> - Todos direitos reservados
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
