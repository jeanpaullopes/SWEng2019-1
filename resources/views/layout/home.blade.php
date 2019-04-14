@extends('master')

@section('content')
    {{-- LOAD CSS COMPONENTS --}}
    @push('csslink')
        <link href="{{ asset('assets/css/component/carousel.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('assets/css/component/carousel-noticias.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('assets/css/component/carousel-top.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('assets/css/component/carreira-fale-conosco.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('assets/css/layout/home.css') }}" rel="stylesheet" type="text/css">
    @endpush

    {{-- LOAD JS COMPONENTS --}}
    <div data-component="/component/carousel"></div>

    <section class="carousel carousel-top carousel-dark">
        <div class="carousel-main" data-carousel>
            @for ($i = 7; $i < 10; $i += 1)
                @include('component.carousel-top', [
                    'img' => asset('assets/img/marcacao/home.jpg'), // TODO pegar imagem desktop ou mobile
                    'buttonCssClass' => 'btn-primary',
                    'buttonLink' => url('/') . '/noticia',
                    'buttonText' => 'Saiba Mais',
                    'titles' => [
                        'Lorem Ipsum',
                        'Lorem Ipsum, Lorem Ipsum, Lorem Ipsum'
                    ]
                ])
            @endfor
        </div>

        <div class="carousel-previous">
            <button class="btn btn-carousel">
                <span>Anterior</span>

                <div class="container-svg container-svg-xl">
                    <?= file_get_contents(asset('assets/img/svg/svg-arrow-lg-left.svg')); ?>
                </div>
            </button>
        </div>

        <div class="carousel-next">
            <button class="btn btn-carousel">
                <span>Próximo</span>

                <div class="container-svg container-svg-xl">
                    <?= file_get_contents(asset('assets/img/svg/svg-arrow-lg-right.svg')); ?>
                </div>
            </button>
        </div>

        <div class="carousel-dots" data-carousel data-as-nav-for="true" data-contain="true" data-draggable="false" data-wrap-around="false">
            @for ($i = 1; $i < 4; $i += 1)
                <button class="carousel-cell">
                    <span>{{ $i }}</span>
                </button>
            @endfor
        </div>
    </section>

    <main class="home">
        <section class="expertise section-padding-y wrap">
            <h1 class="title-section title-light line-top">Expertise</h1>

            <div class="row no-gutters">
                <div class="col-12 col-sm-6 expertise-box">
                    <div class="row no-gutters">
                        <div class="img-background overlay-top-bottom"
                            data-blazy data-src="https://picsum.photos/800/600/?image=1031"
                            data-src-small="https://picsum.photos/800/600/?image=1031"></div>

                        <div class="col-12 align-self-center">
                            <h3 class="title3">Segmentos Econômicos</h3>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget, accumsan rutrum mauris.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 expertise-box">
                    <div class="row no-gutters">
                        <div class="img-background overlay-top-bottom"
                            data-blazy data-src="https://picsum.photos/800/600/?image=1067"
                            data-src-small="https://picsum.photos/800/600/?image=1067"></div>

                        <div class="col-12 align-self-center">
                            <h3 class="title3">Atuação</h3>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget, accumsan rutrum mauris.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="institucional section-padding-y wrap">
            <div class="img-background overlay-top-bottom"
                data-blazy data-src="{{ asset('assets/img/marcacao/institucional-home.jpg') }}"
                data-src-small="{{ asset('assets/img/marcacao/institucional-home.jpg') }}"></div>

            <h1 class="title-section title-light line-top">Institucional</h1>

            <div class="row align-items-center justify-content-center no-gutters">
                <div class="col-12 box-line-bottom box-line-center">
                    <h2 class="title-institucional">54 Anos de história</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. <span class="color-brown">Vestibulum quam risus</span>, lobortis volutpat consectetur eget, accumsan rutrum mauris. Quisque et ligula <span class="color-brown">molestie</span>, condimentum ex id, interdum quam. Lorem ipsum dolor sit amet, consectetur <span class="color-brown">adipiscing elit</span>.
                    </p>

                    <div class="svg-arrow-xl-right">
                        <?= file_get_contents(asset('assets/img/svg/svg-arrow-xl-right.svg')); ?>
                    </div>
                </div>
            </div>
        </section>

        <section class="noticias section-padding-y">
            <h1 class="title-section title-light line-top wrap">Notícias</h1>

            <div class="carousel carousel-noticias carousel-dark">
                <div class="carousel-main wrap" data-carousel data-group-cells-sm="2" data-group-cells-lg="3">
                    @for ($i = 1; $i < 10; $i += 1)
                        @include('component.carousel-noticias', [
                            'buttonCssClass' => 'btn-primary',
                            'buttonLink' => url('/') . '/noticia',
                            'buttonText' => 'Saiba Mais',
                            'date' => '28.05',
                            'titles' => [
                                'Indústria',
                                'Alimentação',
                                'Lorem ipsum dolor sit am consectetur.'
                            ]
                        ])
                    @endfor
                </div>

                <div class="carousel-previous">
                    <button class="btn btn-carousel">
                        @if ($agent->isMobile())
                            <div class="container-svg container-svg-xs">
                                <?= file_get_contents(asset('assets/img/svg/svg-arrow-xs-left.svg')); ?>
                            </div>
                        @else
                            <div class="container-svg">
                                <?= file_get_contents(asset('assets/img/svg/svg-arrow-left.svg')); ?>
                            </div>
                        @endif
                    </button>
                </div>

                <div class="carousel-next">
                    <button class="btn btn-carousel">
                        @if ($agent->isMobile())
                            <div class="container-svg container-svg-xs">
                                <?= file_get_contents(asset('assets/img/svg/svg-arrow-xs-right.svg')); ?>
                            </div>
                        @else
                            <div class="container-svg">
                                <?= file_get_contents(asset('assets/img/svg/svg-arrow-right.svg')); ?>
                            </div>
                        @endif
                    </button>
                </div>
            </div>
        </section>

        <section class="carreira-fale-conosco">
            <div class="row no-gutters">
                <div class="col-12 col-sm-6">
                    @include('component.carreira', [
                        'img' => asset('assets/img/marcacao/carreira.jpg'), // TODO pegar imagem desktop ou mobile
                        'link' => url('/') . '/carreira',
                        'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Lobortis volutpat consectetur eget, accumsan rutrum mauris. Quisque et ligula, condimentum ex id, interdum quam. Lorem ipsum dolor sit amet, consectetur.',
                        'title' => 'Carreira'
                    ])
                </div>

                <div class="col-12 col-sm-6">
                    @include('component.fale-conosco', [
                        'img' => asset('assets/img/marcacao/fale-conosco.jpg'), // TODO pegar imagem desktop ou mobile
                        'link' => url('/') . '/fale-conosco',
                        'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Lobortis volutpat consectetur eget, accumsan rutrum mauris. Quisque et ligula, condimentum ex id, interdum quam. Lorem ipsum dolor sit amet, consectetur.',
                        'title' => 'Fale Conosco'
                    ])
                </div>
            </div>
        </section>
    </main>
@endsection
