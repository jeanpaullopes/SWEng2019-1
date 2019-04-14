@extends('master')

@section('content')
    {{-- LOAD CSS COMPONENTS --}}
    @push('csslink')
        <link href="{{ asset('assets/css/component/banner.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('assets/css/layout/noticias.css') }}" rel="stylesheet" type="text/css">
    @endpush

    {{-- LOAD JS COMPONENTS --}}
    <div data-component="/component/forms"></div>
    <div data-component="/layout/noticias"></div>

    <section class="banner-top">
        @include('component.banner-top', [
            'img' => asset('assets/img/marcacao/noticias.jpg'), // TODO pegar imagem desktop ou mobile
            'titles' => [
                'Notícias'
            ]
        ])
    </section>

    <section class="noticias-filtro wrap wrap-content">
        <div class="row align-items-center justify-content-between no-gutters">
            <div class="col-12">
                <h4 class="title4">Filtros</h4>
            </div>

            <div class="col-12">
                <form action="" class="form">
                    <div class="row justify-content-center">
                        <div class="col-12 col-xl">
                            <div>
                                <select name="conteudo" class="icon-right">
                                    <option value="" disabled selected>Por conteúdo</option>
                                    <option value="1">Teste 1</option>
                                    <option value="2">Teste 2</option>
                                    <option value="3">Teste 3</option>
                                </select>

                                <?= file_get_contents(asset('assets/img/svg/svg-arrow-down.svg')); ?>
                            </div>
                        </div>

                        <div class="col-12 col-xl">
                            <div>
                                <select name="advogado" class="icon-right">
                                    <option value="" disabled selected>Por advogado</option>
                                    <option value="1">Teste 1</option>
                                    <option value="2">Teste 2</option>
                                    <option value="3">Teste 3</option>
                                </select>

                                <?= file_get_contents(asset('assets/img/svg/svg-arrow-down.svg')); ?>
                            </div>
                        </div>

                        <div class="col-12 col-xl">
                            <div>
                                <select name="areaAtuacao" class="icon-right">
                                    <option value="" disabled selected>Por área de atuação</option>
                                    <option value="1">Teste 1</option>
                                    <option value="2">Teste 2</option>
                                    <option value="3">Teste 3</option>
                                </select>

                                <?= file_get_contents(asset('assets/img/svg/svg-arrow-down.svg')); ?>
                            </div>
                        </div>

                        <div class="col-12 col-xl no-padding">
                            <div class="row no-gutters">
                                <div class="col-6">
                                    <div>
                                        <select name="ano" class="icon-right">
                                            <option value="" disabled selected>Ano</option>
                                            <option value="1">2017</option>
                                            <option value="2">2018</option>
                                            <option value="3">2019</option>
                                        </select>

                                        <?= file_get_contents(asset('assets/img/svg/svg-arrow-down.svg')); ?>
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div>
                                        <select name="mes" class="icon-right">
                                            <option value="" disabled selected>Mês</option>
                                            <option value="1">Janeiro</option>
                                            <option value="2">Fevereiro</option>
                                            <option value="3">Março</option>
                                            <option value="4">Abril</option>
                                            <option value="5">Maio</option>
                                            <option value="6">Junho</option>
                                            <option value="7">Julho</option>
                                            <option value="8">Agosto</option>
                                            <option value="9">Setembro</option>
                                            <option value="10">Outubro</option>
                                            <option value="11">Novembro</option>
                                            <option value="12">Dezembro</option>
                                        </select>

                                        <?= file_get_contents(asset('assets/img/svg/svg-arrow-down.svg')); ?>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-xl">
                            <button class="btn btn-primary" data-trigger-noticias-btn-search>Buscar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <main class="noticias">
        <section class="section-padding-y wrap">
            <h2 class="title-section title-dark line-top">Notícias</h2>

            <div class="row justify-content-between no-gutters wrap wrap-content" data-noticias>
                <!-- CONTENT -->
            </div>

            <button class="btn btn-secondary" data-trigger-noticias-btn-more>Carregar mais notícias</button>
        </section>
    </main>
@endsection
