@extends('master')

@section('content')
    {{-- LOAD CSS COMPONENTS --}}
    @push('csslink')
        <link href="{{ asset('assets/css/component/advogados.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('assets/css/component/banner.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('assets/css/component/share.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('assets/css/layout/noticia-case.css') }}" rel="stylesheet" type="text/css">
    @endpush

    <section class="banner-top half">
        @include('component.banner-top', [
            'img' => asset('assets/img/marcacao/noticias.jpg') // TODO pegar imagem desktop ou mobile
        ])
    </section>

    <section class="share">
        @include('component.share-top', [
            'linkFacebook' => '',
            'linkTwitter' => '',
            'linkLinkedin' => ''
        ])
    </section>

    <main class="noticia">
        <section class="section-padding-y wrap wrap-content">
            <div class="box">
                <span class="date">28.05</span>

                <h2 class="title4">Indústria</h2>

                <h2 class="title5">Alimentação</h2>

                <h3 class="title-page line-top title-dark">Lorem ipsum dolor sit am consectetur consectetur.</h3>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget.
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget.
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget. Vestibulum quam risus, lobortis volutpat consectetur eget.
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget.
                    <br>
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget. Vestibulum quam risus, lobortis volutpat consectetur eget.
                    <br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ullamcorper ipsum. Vestibulum quam risus, lobortis volutpat consectetur eget.
                </p>
            </div>
        </section>

        <section class="advogados section-padding-bottom">
            <h1 class="title-section title-dark line-top wrap">Advogados</h1>

            <div class="row justify-content-between no-gutters">
                <?php
                $total = 10;
                ?>

                @for ($i = 1; $i < $total; $i += 1)
                    <div class="col-12 col-xl-6 advogados-box {{ $total === 1 ? 'offset-sm-3 no-border' : '' }}">
                        @include('component.advogados', [
                            'email' => 'loremipsum@lippert.com.br',
                            'function' => 'Sócio Diretor',
                            'img' => asset('assets/img/marcacao/advogado.jpg'),
                            'link' => url('/') . '/colaborador',
                            'name' => 'George Lippert Neto',
                            'phone' => '51 3342 9987'
                        ])
                    </div>
                @endfor
            </div>
        </section>
    </main>
@endsection
