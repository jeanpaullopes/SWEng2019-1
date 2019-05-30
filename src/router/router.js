import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Carona } from '../component/Page/Carona';
import { Home } from '../component/Page/Home';
import { Perfil } from '../component/Page/Perfil';
import { Pesquisa } from '../component/Page/Pesquisa';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pesquisar" component={Pesquisa} />
            <Route path="/caronas" component={Carona} />
            <Route path="/perfil" component={Perfil} />
            <Route path="*" component={Home} />
        </Switch>
    );
};
