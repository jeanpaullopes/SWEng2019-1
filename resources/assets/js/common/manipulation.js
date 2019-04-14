import { baseDuration, headerHeight } from '../common/common.js';

// ELEMENT
export const addClassElement = (element, className) => {
    if (!hasClassElement(element, className)) {
        element.className += ' ' + className;
    }
};

export const hasClassElement = (element, className) => {
    return new RegExp(' ' + className + ' ').test(' ' + element.className + ' ');
};

export const removeClassElement = (element, className) => {
    let newClass = ' ' + element.className.replace(/[\t\r\n]/g, ' ') + ' ';

    if (hasClassElement(element, className)) {
        while (newClass.indexOf(' ' + className + ' ') > -1) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }

        element.className = newClass.replace(/^\s+|\s+$/g, '');
    }
};

export const toggleClassElement = (element, className) => {
    let newClass = ' ' + element.className.replace(/[\t\r\n]/g, ' ') + ' ';

    if (hasClassElement(element, className)) {
        while (newClass.indexOf(' ' + className + ' ') > -1) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }

        element.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        element.className += ' ' + className;
    }
};

// EVENT
export const eventElement = (event, elementTrigger, fn, preventDefault = true) => {
    if (elementTrigger) {
        elementTrigger.addEventListener(event, function(e) {
            if (preventDefault) {
                e.preventDefault();
            }

            fn(elementTrigger);
        });
    }
};

// MASK
export const paramsMask = (element, elementValue, expressionRegular) => {
    if (element.hasAttribute('required')) {
        const pattern = new RegExp(expressionRegular);
        const regex = pattern.test(elementValue);

        if (regex === true) {
            removeClassElement(element, 'error');
            removeClassElement(element, 'is-invalid');

            const patternCurrent = elementValue.match(pattern);

            return patternCurrent;
        } else {
            addClassElement(element, 'error is-invalid');

            return false;
        }
    }

    return false;
};

export const eventMask = (element) => {
    switch (element.getAttribute('data-mask')) {
        case 'cpf':
            element.addEventListener('blur', function(e) {
                const pattern = paramsMask(e.target, e.target.value.replace(/\D/g, ''), /^([0-9]{3})\.?([0-9]{3})\.?([0-9]{3})\-?([0-9]{2})$/);

                e.target.value = pattern ? pattern[1] + '.' + pattern[2] + '.' + pattern[3] + '-' + pattern[4] : '';
            });

            break;
        case 'data':
            element.addEventListener('blur', function(e) {
                const pattern = paramsMask(e.target, e.target.value.replace(/\D/g, ''), /^(0?[1-9]|[12][0-9]|3[0-1])\/?(0?[1-9]|1[0-2])\/?(\d{4})$/);

                e.target.value = pattern ? pattern[1] + '/' + pattern[2] + '/' + pattern[3] : '';
            });

            break;
        case 'phone':
            element.addEventListener('blur', function(e) {
                const pattern = paramsMask(e.target, e.target.value.replace(/\D/g, ''), /^\(?(\d{2})\)?\s?(\d{4}|\d{5})\-?(\d{4})$/);

                e.target.value = pattern ? '(' + pattern[1] + ') ' + pattern[2] + '-' + pattern[3] : '';
            });

            break;
    }
};

// RESPONSIVE
export const isAndroid = () => {
    return /Android/i.test(window.navigator.userAgent);
};

export const isBlackBerry = () => {
    return /BlackBerry/i.test(window.navigator.userAgent);
};

export const isIos = () => {
    return /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
};

export const isOpera = () => {
    return /Opera Mini/i.test(window.navigator.userAgent);
};

export const isWindows = () => {
    return /IEMobile/i.test(window.navigator.userAgent);
};

export const isAnyMobile = () => {
    return isAndroid() || isBlackBerry() || isIos() || isOpera() || isWindows();
};

export const isSm = () => {
    return document.documentElement.clientWidth > 760 && document.documentElement.clientWidth < 1030 ? true : false;
};

export const isMd = () => {
    return document.documentElement.clientWidth > 1020 && document.documentElement.clientWidth < 1205 ? true : false;
};

export const isLg = () => {
    return document.documentElement.clientWidth > 1195 && document.documentElement.clientWidth < 1905 ? true : false;
};

export const isMaxXs = () => {
    return document.documentElement.clientWidth < 485 ? true : false;
};

export const isMaxSm = () => {
    return document.documentElement.clientWidth < 775 ? true : false;
};

export const isMaxMd = () => {
    return document.documentElement.clientWidth < 1030 ? true : false;
};

export const isMaxLg = () => {
    return document.documentElement.clientWidth < 1205 ? true : false;
};

export const isMaxXl = () => {
    return document.documentElement.clientWidth < 1905 ? true : false;
};

export const isMinXs = () => {
    return document.documentElement.clientWidth > 475 ? true : false;
};

export const isMinSm = () => {
    return document.documentElement.clientWidth > 760 ? true : false;
};

export const isMinMd = () => {
    return document.documentElement.clientWidth > 1020 ? true : false;
};

export const isMinLg = () => {
    return document.documentElement.clientWidth > 1195 ? true : false;
};

export const isMinXl = () => {
    return document.documentElement.clientWidth > 1895 ? true : false;
};

// SCROLL
const linear = (t, b, c, d) => {
    t /= d / 2;

    if (t < 1) {
        return (c / 2) * t * t + b;
    }

    t -= 1;

    return (-c / 2) * (t * (t - 2) - 1) + b;
};

export const scrollIt = (targetSelector, offset = 0, duration = baseDuration, callback) => {
    const element = document.querySelector(targetSelector);

    if (!element) {
        console.error('Elemento não encontrado');
        return false;
    }

    const targetPosition = element.getBoundingClientRect().y - document.querySelector('body').getBoundingClientRect().y - headerHeight + offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) {
            startTime = currentTime;
        }

        const timeElapsed = currentTime - startTime;
        const run = linear(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            if (callback) {
                callback();
            }

            return;
        }
    };

    requestAnimationFrame(animation);
};

export const scrollItInside = (fatherSelector, targetSelector, offset = 0, duration = baseDuration, callback) => {
    const element = document.querySelector(targetSelector);

    if (!element) {
        console.error('Elemento não encontrado');
        return false;
    }

    const targetPosition = element.getBoundingClientRect().y - headerHeight + offset;

    const elementFather = document.querySelector(fatherSelector);

    if (!elementFather) {
        console.error('Elemento não encontrado');
        return false;
    }

    const startPosition = elementFather.getBoundingClientRect().y;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) {
            startTime = currentTime;
        }

        const timeElapsed = currentTime - startTime;
        const run = linear(timeElapsed, startPosition, distance, duration);

        document.querySelector(fatherSelector).scrollTop = run;

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            if (callback) {
                callback();
            }

            return;
        }
    };

    requestAnimationFrame(animation);
};
