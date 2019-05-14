# SWEng2019-1

Projeto da turma de Fundamentos de Engenharia de Software FTEC 2019/1

## INSTALAÇÕES NECESSÁRIA PARA O PROJETO

-   [GIT](https://git-scm.com/downloads)
-   [NodeJS](https://nodejs.org/en/download/)
-   [Xampp](https://www.apachefriends.org/download.html)

## MODO DE USAR O TERMINAL

-   Na pasta do projeto clicar com o direito do mouse e clicar em "Git Bash Here"

## FRONTEND

Executar apenas a primeira vez no terminal:

-   npm i -g npm (atualiza NPM)
-   npm i -g node-sass (atualiza node-sass globalmente)
-   npm i (instala pacotes de tarefas)
-   npm audit fix (corrigi problemas em pacotes)

## React

-   Referencias da estrutura
    [Básico](https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a)
    [Extras](https://medium.com/@sethalexander/how-to-build-your-own-react-boilerplate-1a97d09337fd)
    [Extras](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)

#### Ambiente de desenvolvimento, executar no terminal:

-   npm run dev

#### Ambiente de produção, executar no terminal:

-   npm run prod

#### Caso ocorra algum erro posteriormente, executar no terminal:

-   npm i

### Referências de padrão no desenvolvimento React

-   [Airbnb](https://github.com/airbnb/javascript/tree/master/react#naming)

### Referências de CSS auxiliar

-   [Bootstrap Display](https://getbootstrap.com/docs/4.3/utilities/display/)
-   [Bootstrap Grid](https://getbootstrap.com/docs/4.3/layout/grid/)
-   [Bootstrap Spacing](https://getbootstrap.com/docs/4.3/utilities/spacing/)
-   [Bootstrap Text](https://getbootstrap.com/docs/4.3/utilities/text/)

### Imagens

-   Rodar o 'gulp image' para otimizar as imagens de pasta resources e colocar na pasta public;
-   Seguir a nomenclatura spinal-case - Ex: image-name;

### Javascript

-   Ao utilizar métodos do ES6 sempre verificar se tem suporte para IE9+, de preferência para métodos do ES5;
-   Priorizar os seletores nativos como "document.getElementById" ou "document.querySelector";
-   Javascript modular;
-   Strings utilizar apóstrofo - Ex: 'texto';
-   Utilizar [JSDOC](https://msdn.microsoft.com/pt-br/library/Mt162307.aspx);

### Links externos com target="\_blank" em tags <a/>

-   Utilizar rel="noopener" [Link](https://desenvolvimentoparaweb.com/miscelanea/relnoopener-performance-seguranca/);

### Plugins

-   HttpRequest: [Axios](https://github.com/axios/axios);

### SASS

-   Utilizar as variáveis sempre que possível;
-   Media queries dentro do próprio elemento seguindo os padrões especificados no projeto;
-   [Metodologia tipo modular](https://medium.com/@marcmintel/how-to-use-the-module-pattern-in-your-scss-sass-stylesheets-89fe38a6e1f3);

### Principais Metodologias

-   [ES6](http://es6-features.org/)
