import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';

import { Footer } from './component/Footer';
import { Header } from './component/Header';

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Router />
            <Footer />
        </BrowserRouter>
    );
};
