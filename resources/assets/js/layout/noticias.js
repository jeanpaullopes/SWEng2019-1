import axios from 'axios';
import Mustache from 'mustache';
import { addClassElement, eventElement } from '../common/manipulation.js';

let pageCurrent = 1;
let pageNew = 1;
let templateNoticias = '';

const btnMore = () => {
    pageNew = pageCurrent + 1;
    getNoticias();
};

const btnMoreState = (pageTotal) => {
    if (pageCurrent === pageTotal) {
        addClassElement(document.querySelector('[data-trigger-noticias-btn-more]'), 'd-none');
    }
};

const getNoticias = () => {
    axios
        .get(`${window.PATH_JSON}/noticias.json`, {
            params: {
                advogado: document.querySelector('.noticias-filtro select[name="advogado"]').value,
                ano: document.querySelector('.noticias-filtro select[name="ano"]').value,
                areaAtuacao: document.querySelector('.noticias-filtro select[name="areaAtuacao"]').value,
                conteudo: document.querySelector('.noticias-filtro select[name="conteudo"]').value,
                mes: document.querySelector('.noticias-filtro select[name="mes"]').value,
                page: pageNew
            }
        })
        .then(function(response) {
            // TEMPLATE - RENDER
            document.querySelector('[data-noticias]').innerHTML += Mustache.render(templateNoticias, response.data);

            // PAGE - CURRENT VALUE
            pageCurrent = response.data.page;

            // BTN - STATE
            btnMoreState(response.data.pageTotal);
        })
        .catch(function(error) {
            console.log(error);
        });
};

const init = () => {
    // BTN MORE
    eventElement('click', document.querySelector('[data-trigger-noticias-btn-more]'), btnMore);

    // BTN SEARCH
    eventElement('click', document.querySelector('[data-trigger-noticias-btn-search]'), getNoticias);

    // TEMPLATE - GET
    axios
        .get(`${window.PATH_TEMPLATE}/noticias.mst`)
        .then(function(response) {
            Mustache.parse(response.data);
            templateNoticias = response.data;
            getNoticias();
        })
        .catch(function(error) {
            console.log(error);
        });

    // TODO: Filtro
};

init();
