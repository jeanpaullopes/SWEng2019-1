import { createGlobalStyle } from 'styled-components';

export const Normalize = createGlobalStyle`
    /* GENERAL */
    * {
        border: 0;
        box-sizing: border-box;
        margin: 0;
        outline: none;
        padding: 0;
        vertical-align: baseline;
        z-index: 0;
    }

    /* Address '[hidden]' styling not present in IE 8/9. */
    /* Hide the 'template' element in IE, Safari, and Firefox < 22. */
    [hidden],
    template {
        display: none;
    }

    /* Corrects block display not defined in IE6/7/8/9 & FF3 */
    article,
    aside,
    details,
    div,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section,
    summary {
        display: block;
        position: relative;
    }

    /* Correct 'inline-block' display not defined in IE 6/7/8/9 and Firefox 3. */
    /* Normalize vertical alignment of 'progress' in Chrome, Firefox, and Opera. */
    audio,
    canvas,
    progress,
    video {
        display: inline-block;
        vertical-align: baseline;
    }

    /* Prevents modern browsers from displaying 'audio' without controls */
    /* Remove excess height in iOS 5 devices */
    audio {
        &:not([controls]) {
            display: none;
            height: 0;
        }
    }

    /* IMG */
    img,
    picture {
        border: 0;
        height: auto;
        margin: auto;
        max-width: 100%;
        vertical-align: middle;
        width: auto;
    }

    /* FORM */
    /* Address margins set differently in Firefox 4+, Safari, and Chrome. */
    /* Remove inner padding and border in Firefox 4+. */
    button,
    input,
    label,
    optgroup,
    select,
    textarea {
        color: inherit;
        position: relative;
        &::-moz-focus-inner {
            border: 0;
        }
    }

    /* Re-set default cursor for disabled elements. */
    button[disabled],
    input[disabled],
    select[disabled],
    textarea[disabled] {
        cursor: default;
    }

    fieldset {
        border: 0;
        margin: 40px 0 0 0;
    }

    /* Fix the cursor style for Chrome's increment/decrement buttons. For certain */
    /* 'font-size' values of the 'input', it causes the cursor style of the */
    /* decrement button to change from 'default' to 'text'. */
    input[type='number'] {
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            height: auto;
        }
    }

    /* Remove inner padding and search cancel button in Safari and Chrome on OS X. */
    /* Safari (but not Chrome) clips the cancel button when the search input has */
    /* padding (and 'textfield' appearance). */
    /* Address 'appearance' set to 'searchfield' in Safari and Chrome. */
    input[type='search'] {
        appearance: textfield;
        &::-webkit-search-cancel-button,
        &::-webkit-search-decoration {
            appearance: none;
        }
    }

    /* LIST */
    ol,
    ul {
        display: block;
        height: auto;
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: relative;
        width: auto;
    }

    /* TABLE */
    table {
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
        width: 100%;
        td,
        th,
        tr {
            vertical-align: middle;
        }
    }
`;
