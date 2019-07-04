import React from 'react';

import { Button1, Button2 } from '../Button';

export const Componente = () => {
    return (
        <main className="content-padding-y">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-5">
                        <Button1
                            data-attr="teste1"
                            onClick={() => {
                                alert('click botão 1');
                            }}
                        >
                            botão 1
                        </Button1>
                    </div>

                    <div className="col-5">
                        <Button2
                            data-attr="teste2"
                            onClick={() => {
                                alert('click botão 2');
                            }}
                        >
                            botão 2
                        </Button2>
                    </div>
                </div>
            </div>
        </main>
    );
};
