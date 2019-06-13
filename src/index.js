import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

import './asset/scss/common/common.scss';
import './asset/scss/layout/layout.scss';

// import * as ServiceWorker from './service-worker.js';

render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// ServiceWorker.unregister();

module.hot.accept();
