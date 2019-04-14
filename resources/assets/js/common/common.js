import bLazy from 'blazy';
import { eventElement, scrollIt } from '../common/manipulation.js';

export const baseDelay = 3000;
export const baseDuration = 400;
export const baseEasing = 'linear';
export const footerHeight = document.querySelector('.footer').offsetHeight;
export const headerHeight = document.querySelector('.header').offsetHeight;

const init = () => {
    // ANCOR
    const btnAncor = (element) => {
        const target = element
            .getAttribute('data-ancor')
            .trim()
            .replace(/\s+/g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();

        scrollIt(`#${target}`, 15);
    };

    const btnsAncor = document.querySelectorAll('[data-ancor]');

    for (let i = 0, l = btnsAncor.length; i < l; i += 1) {
        eventElement('click', btnsAncor[i], btnAncor);
    }

    // BLAZY
    new bLazy({
        loadInvisible: false,
        offset: 0,
        selector: '[data-blazy]',
        breakpoints: [
            {
                width: 420,
                src: 'data-src-small'
            }
        ]
    });

    // BTNS
    const btnBack = () => {
        window.history.go(-1);
    };

    const btnsBack = document.querySelectorAll('[data-trigger-back]');

    for (let i = 0, l = btnsBack.length; i < l; i += 1) {
        eventElement('click', btnsBack[i], btnBack);
    }

    // LOAD COMPONENT
    const component = document.querySelectorAll('[data-component]');

    for (let i = 0, l = component.length; i < l; i += 1) {
        require([window.PATH_JS + component[i].getAttribute('data-component') + '.js']);
    }
};

init();
