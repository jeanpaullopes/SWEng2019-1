import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Carona } from '../component/Page/Carona';
import { Home } from '../component/Page/Home';

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/carona" component={Carona} />
            <Route path="*" component={Home} />
        </Switch>
    );
};
