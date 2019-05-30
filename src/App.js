import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { Normalize } from './style/normalize';

import { Footer } from './component/Footer';
import { Header } from './component/Header';

export const App = () => {
    return (
        <Fragment>
            <Normalize />
            <BrowserRouter>
                <Header />
                <Router />
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
};
