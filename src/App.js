import React, { Fragment } from 'react';

import Footer from './component/Footer';
import Header from './component/Header';

import './asset/scss/common/common.scss';
import './asset/scss/layout/layout.scss';

const App = () => {
    return (
        <Fragment>
            <Header />
            <main>main</main>
            <Footer />
        </Fragment>
    );
};

export default App;
