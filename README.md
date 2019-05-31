## PADRÕES

-   Nomes no singular: Todas as pastas;
-   Idioma inglês: Todos os nomes, exceto nomes próprios, como seções ou páginas;
-   lowerCamelCase: Nomes de variáveis, funções, métodos - Ex: functionName;
-   UpperCamelCase: Nomes de imports, classes, interfaces, pastas de componentes, arquivos de componentes - Ex: ClassName, Header.js;
-   spinal-case: Nomes no CSS, arquivos no geral, exceto pastas de componentes e arquivos de componentes - Ex: topo-imagem-1.jpg, Header.js;
-   snake_case: Nomes de pastas, exceto pastas de componentes - Ex: folder_name;

## INSTALAÇÕES NECESSÁRIA PARA O PROJETO

-   [GIT](https://git-scm.com/downloads)
-   [NodeJS](https://nodejs.org/en/download/)

## MODO DE USAR O TERMINAL

-   Na pasta do projeto clicar com o direito do mouse e clicar em "Git Bash Here"

## FRONTEND

Executar apenas a primeira vez no terminal:

-   npm i -g npm (atualiza NPM)
-   npm i -g node-sass (atualiza node-sass globalmente)
-   npm i (instala pacotes de tarefas)
-   npm audit fix (corrigir pacotes)

#### Ambiente de desenvolvimento, executar no terminal:

-   npm run dev

#### Ambiente de produção, executar no terminal:

-   npm run prod

#### Caso ocorra algum erro posteriormente, executar no terminal:

-   npm i

### React

#### Referencias para configuração:

-   [Configuração básica](https://medium.freecodecamp.org/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a);
-   [Configuração básica](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/);
-   [Configuração avançada](https://medium.com/@sethalexander/how-to-build-your-own-react-boilerplate-1a97d09337fd);

#### Referencias para estrutura de pastas e arquivos:

-   [Estrutura básica](https://medium.com/@damusnet/how-to-structure-your-files-in-a-large-react-application-the-problem-2ed67f5fc145);

#### Referências para padrão no desenvolvimento:

-   [Airbnb](https://github.com/airbnb/javascript/tree/master/react#naming);

#### Referências para componentes usando Hooks:

-   [Hooks](https://www.robinwieruch.de/react-function-component/);
-   [Hooks - CRUD](https://www.taniarascia.com/crud-app-in-react-with-hooks/);

#### Referências para Router:

-   [Router - SPA](https://www.taniarascia.com/using-react-router-spa/);

#### Referências para Formulários:

-   [React Hook Form](https://github.com/bluebill1049/react-hook-form);
-   [YUP Validation](https://github.com/jquense/yup#install);
-   [Post YUP Validation](https://medium.com/@rossbulat/introduction-to-yup-object-validation-in-react-9863af93dc0e);

#### Referências para Styled Component:

-   [Styled-Components](https://www.styled-components.com/)
-   [Post Styled-Components básico](https://blog.getty.io/desenvolvendo-apps-com-styled-components-85ec6880b194)
-   [Post Styled-Components avançado](https://blog.pagepro.co/2018/11/06/moving-best-scss-practices-to-styled-components-part-1/)
-   [Post Styled-Components avançado](https://www.robinwieruch.de/react-styled-components/)
-   [Post CSS to Style-Components](https://jsramblings.com/2017/10/29/migrating-to-styled-components-cheatsheet.html)

#### Boas práticas:

-   Evitar a utilização de export default;
-   Usar sempre a propriedade "key" nos elementos HTML em loops do React. Ex: <li key={list.id}>{list.text}</li>;

### Referências de CSS auxiliar

-   [Bootstrap Display](https://getbootstrap.com/docs/4.3/utilities/display/);
-   [Bootstrap Grid](https://getbootstrap.com/docs/4.3/layout/grid/);
-   [Bootstrap Spacing](https://getbootstrap.com/docs/4.3/utilities/spacing/);
-   [Bootstrap Text](https://getbootstrap.com/docs/4.3/utilities/text/);

### Javascript

-   Ao utilizar métodos do ES6 sempre verificar se tem suporte para IE9+, de preferência para métodos do ES5;
-   Priorizar os seletores nativos como "document.getElementById" ou "document.querySelector";
-   Javascript modular;
-   Strings utilizar apóstrofo - Ex: 'texto';
-   Utilizar [JSDOC](https://msdn.microsoft.com/pt-br/library/Mt162307.aspx);

### Libs

-   HttpRequest: [Axios](https://github.com/axios/axios);

### Links externos com target="\_blank" em tags <a/>

-   Utilizar rel="noopener" [Link](https://desenvolvimentoparaweb.com/miscelanea/relnoopener-performance-seguranca/);

### SASS

-   Utilizar as variáveis sempre que possível;
-   Media queries dentro do próprio elemento seguindo os padrões especificados no projeto;
-   [Metodologia tipo modular](https://medium.com/@marcmintel/how-to-use-the-module-pattern-in-your-scss-sass-stylesheets-89fe38a6e1f3);

### SVG

-   [Referência de uso](https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91);
-   Sempre otimizar código do Svg, juntando formas, removendo código desnecessário, entre outras otimizações;
-   Minificar código, utilizar site [https://jakearchibald.github.io/svgomg/](https://jakearchibald.github.io/svgomg/);
-   Utilizar como componente React;

### Principais Metodologias

-   [ES6](http://es6-features.org/)
