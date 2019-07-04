import React from 'react';

import './Home.scss';

export const Home = () => {
    return (
        <main className="home content-padding-y">
            <div className="container">
                <div className="row align-items-center justify-content-between no-gutters">
                    <div className="container">
                        <div className="row slider-text align-items-center justify-content-center">
                            <h1>Quer ir aonde?</h1>
                        </div>
                        <div className="row slider-text align-items-center justify-content-center">
                            <p>Possuímos caronas de confiança, com milhares de clientes por todo o brasil!</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row slider-text align-items-center justify-content-center">
                            <h1>Quer ir viajar?</h1>
                        </div>
                        <div className="row slider-text align-items-center justify-content-center">
                            <p>Viaje para qualquer lugar do brasil, com rapidez e sem transtornos!</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
