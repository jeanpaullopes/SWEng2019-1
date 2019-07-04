import React, { useState, useEffect } from 'react';

import { Button1, Button2 } from '../Button';

export const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Você clicou ${count} vezes.`;
    }, [count]);

    return (
        <main className="content-padding-y">
            <div className="container">
                <div className="row align-items-center justify-content-around">
                    <div className="col-auto">
                        <Button1 data-attr="teste1" onClick={() => setCount(count + 1)}>
                            mais
                        </Button1>
                    </div>

                    <div className="col-auto">
                        <Button2 data-attr="teste2" onClick={() => setCount(count - 1)}>
                            menos
                        </Button2>
                    </div>

                    <div className="col-12 text-center">
                        <p>{count}</p>
                    </div>
                </div>
            </div>
        </main>
    );
};
