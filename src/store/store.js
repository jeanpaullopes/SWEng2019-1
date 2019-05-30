import React from 'react';
import useGlobalHook from './useGlobalHook';

// EXEMPLO DE ESTADO GLOBAL
// https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8
import * as actions from '../action';

const initialState = {
    counters: {
        requests: 0,
        success: 0,
        fail: 0
    },
    status: 'INITIAL',
    repos: []
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
