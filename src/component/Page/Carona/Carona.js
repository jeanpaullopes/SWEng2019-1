import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Carona.scss';

export const Carona = () => {
    const initialCaronaState = {
        carona: {},
        loading: true
    };

    // Getter and setter for carona state
    const [carona, setCarona] = useState(initialCaronaState);

    // Using useEffect to retrieve data from an API (similar to componentDidMount in a class)
    useEffect(() => {
        const fetchData = async () => {
            // Pass our param (:id) to the API call
            const { data } = await axios('../../../../modelos_JSON/carona.json');

            // Update state
            setCarona(data);
        };

        // Invoke the async function
        fetchData();
    }, []);

    return (
        <main className="carona content-padding-y">
            <div className="container">
                <div className="row align-items-center justify-content-between no-gutters">
                    <div className="col-10 col-lg-5">
                        {carona.loading ? (
                            <h1>Carregando...</h1>
                        ) : (
                            <ul>
                                <li>teste</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};
