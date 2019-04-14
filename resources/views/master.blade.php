<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="cache-control" content="public">
        <meta http-equiv="content-language" content="pt-br">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="author" content="Kevin M. Veiga">
        <meta name="copyright" content="© Kevin M. Veiga" />
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, width=device-width">

        <base href="/">
        <meta name="theme-color" content="#ffffff">

        <!-- FAVICON -->
        <link href="favicon.ico" rel="icon" sizes="16x16" type="image/ico">
        <link href="favicon-16x16.png" rel="icon" sizes="16x16" type="image/png">
        <link href="favicon-32x32.png" rel="icon" sizes="32x32" type="image/png">
        <link href="apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
        <link href="safari-pinned-tab.svg" rel="mask-icon" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#00aba9">

        <!-- MANIFEST -->
        <link href="manifest.json" rel="manifest">

        <!-- SEO -->
        <title>Lippert</title>
        <meta name="description" content="Descrição">
        <meta name="robots" content="all">
        <meta name="google" content="notranslate">

        <!-- FONTS -->
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display">

        <!-- CSS -->
        <link href="{{ asset('assets/css/common/common.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('assets/css/layout/layout.css') }}" rel="stylesheet" type="text/css">
        @extends('layout/stack')
    </head>

    <body>
        @include('layout.header')

        @yield('content')

        @include('layout.footer')

        <script>
            window.BUST = '';
            window.PATH = '{{ url('/') }}';
            window.PATH_CSS = '{{ asset('assets/css') }}';
            window.PATH_IMG = '{{ asset('assets/img') }}';
            window.PATH_JS = '{{ asset('assets/js') }}';
            window.PATH_JSON = '{{ asset('assets/json') }}';
            window.PATH_TEMPLATE = '{{ asset('assets/template') }}';

            var require = {
                baseUrl: window.PATH_JS,
                // ALIAS para o REQUIREJS se achar nos caminhos dos arquivos Obs: REQUIREJS não necessita a extensão do arquivo.
                paths: {
                    'axios': 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min',
                    'mustache': 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min'
                },
                shim: {
                    'flickityasnavfor': {
                        'deps': ['flickity']
                    },
                    'flickitylazyload': {
                        'deps': ['flickity']
                    }
                },
                // urlArgs: bust,
                waitSeconds: 0
            };

            /* Detect Is Browser Supported */
            (function() {
                var chromeVersion = 23,
                    edgeVersion = 12,
                    firefoxVersion = 21,
                    ieVersion = 10,
                    operaVersion = 15,
                    safariVersion = 6,
                    undefinedVersion = [0, 0, 0];

                var browser = window.navigator.userAgent;

                var browserArray = (/(chrome|edge|firefox|msie|opr|safari|trident(?=\/))\/?\s*(\d+)/i).exec(browser) || [];

                var isSupported = true,
                    resultArray = '';

                function isSupportedFn(resultArray, browserVersion) {
                    isSupported = parseInt(resultArray[2]) < browserVersion ? false : true;
                };

                if (/edge/i.test(browserArray[1])) {
                    resultArray = (/\b(edge)\/(\d+)/i).exec(browser) || undefinedVersion;

                    isSupportedFn(resultArray, edgeVersion);
                } else if (/msie/i.test(browserArray[1])) {
                    resultArray = (/\b(msie)[ ]+(\d+)/i).exec(browser) || undefinedVersion;

                    isSupportedFn(resultArray, ieVersion);
                } else if (/trident/i.test(browserArray[1])) {
                    resultArray = /\b(rv)[:]+(\d+)/i.exec(browser) || undefinedVersion;

                    isSupportedFn(resultArray, ieVersion);
                } else if (/firefox/i.test(browserArray[1])) {
                    resultArray = (/\b(firefox)\/(\d+)/i).exec(browser) || undefinedVersion;

                    isSupportedFn(resultArray, firefoxVersion);
                } else if (/opr/i.test(browserArray[1])) {
                    resultArray = (/\b(opr)\/(\d+)/i).exec(browser) || undefinedVersion;

                    isSupportedFn(resultArray, operaVersion);
                } else if (/safari/i.test(browserArray[1])) {
                    resultArray = (/\b(safari)\/(\d+)/i).exec(browser) || undefinedVersion;

                    isSupportedFn(resultArray, safariVersion);
                } else if (/chrome/i.test(browserArray[1])) {
                    resultArray = (/\b(chrome)\/(\d+)/i).exec(browser) || undefinedVersion;

                    isSupportedFn(resultArray, chromeVersion);
                }

                return isSupported ? console.log('Navegador suporta a aplicação.') : window.location.href = window.PATH + 'browserNotSupported.html';
            })();
            /* Detect Is Browser Supported */
        </script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js" data-main="{{ asset('assets/js/common/common.js') }}"></script>
    </body>
</html>
