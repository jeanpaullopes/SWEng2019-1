import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Carona } from './component/Carona';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import { Home } from './component/Home';

export const App = () => {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/caronas" component={Carona} />
            </Switch>
            <Footer />
        </Fragment>
    );
};
