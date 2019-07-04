import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Caronas } from '../component/Page/Caronas';
import { Caroneiros } from '../component/Page/Caroneiros';
import { CaroneiroInserir } from '../component/Page/Caroneiros/CaroneiroInserir';
import { Home } from '../component/Page/Home';
import { Perfil } from '../component/Page/Perfil';

import { Componente } from '../component/Example/Componente';
import { Hooks } from '../component/Example/Hooks';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/caronas" component={Caronas} />
            <Route path="/caroneiros" component={Caroneiros} />
            <Route path="/caroneiro-inserir" component={CaroneiroInserir} />
            <Route path="/perfil" component={Perfil} />

            <Route path="/exemplo-componente" component={Componente} />
            <Route path="/exemplo-hooks" component={Hooks} />

            <Route path="*" component={Home} />
        </Switch>
    );
};
