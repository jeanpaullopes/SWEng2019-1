import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Caroneiro.scss';

export const Caroneiros = () => {
    const initialCaronaState = {
        data: {},
        loading: true
    };

    // Getter and setter for carona state
    const [carona, setCarona] = useState(initialCaronaState);

    // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
    useEffect(() => {
        const fetchData = async () => {
            // Pass our param (:id) to the API call
            const response = await axios('http://172.29.1.186/carona/caroneiroBusca.php');

            // Update state
            setCarona(response.data);
        };

        // Invoke the async function
        fetchData();
    }, []);

    return (
        <main className="carona content-padding-y">
            <div className="container">
                <div className="row align-items-center justify-content-between no-gutters">
                    <div className="col-12">
                        {carona.loading ? (
                            <h1>Carregando...</h1>
                        ) : (
                            <ul className="list-item">
                                <li>
                                    <ul className="item-header">
                                        <li>Nome</li>
                                        <li>Email</li>
                                        <li>Cidade</li>
                                    </ul>
                                </li>
                                {carona.data.map((item) => (
                                    <li key={item.id}>
                                        <ul className="item">
                                            <li>{item.nome}</li>
                                            <li>{item.email}</li>
                                            <li>{item.cidade}</li>
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};
