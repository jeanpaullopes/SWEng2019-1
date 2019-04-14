<footer class="footer">
    <div class="row no-gutters">
        <nav class="col-12">
            <div class="row justify-content-between no-gutters menu-top wrap">
                <div class="col social d-none d-lg-block">
                    <ul>
                        <li>siga</li>
                        <li><a href="" target="_blank" rel="noopener"><?= file_get_contents(asset('assets/img/svg/svg-facebook-2.svg')); ?></a></li>
                        <li><a href="" target="_blank" rel="noopener"><?= file_get_contents(asset('assets/img/svg/svg-youtube.svg')); ?></a></li>
                        <li><a href="" target="_blank" rel="noopener"><?= file_get_contents(asset('assets/img/svg/svg-instagram.svg')); ?></a></li>
                    </ul>
                </div>

                <div class="col-12 col-lg">
                    <a href="{{ url('/') }}/institucional">Institucional</a>
                </div>

                <div class="col-12 col-lg">
                    <a href="{{ url('/') }}/expertise">Expertise</a>
                </div>

                <div class="col-12 col-lg">
                    <a href="{{ url('/') }}/equipe">Equipe</a>
                </div>

                <div class="col-12 col-lg">
                    <a href="{{ url('/') }}/noticias">Notícias</a>
                </div>

                <div class="col-12 col-lg">
                    <a href="{{ url('/') }}/carreira">Carreira</a>
                </div>

                <div class="col-12 col-lg">
                    <a href="{{ url('/') }}/fale-conosco">Fale Conosco</a>
                </div>

                <div class="col-12 col-lg d-block d-lg-none">
                    @include('component.area-restrita')
                </div>
            </div>
        </nav>

        <div class="col-12">
            <nav class="row justify-content-between no-gutters menu-bottom wrap">
                <div class="col">
                    Endereço: Rua Manoelito de
                    <br>
                    Ornellas, 55, 10° Andar
                    <br>
                    Bairro Praia de Belas
                    <br class="d-none d-lg-block">
                    CEP 90110-230
                    <br>
                    Porto Alegre - RS - Brasil
                    <br>
                    Fone (51) 3302-2600
                    <br class="d-none d-lg-block">
                    Fax (51) 3302-2601
                </div>

                <div class="col d-none d-lg-block">
                    <ul class="footer-links">
                        <li><a href="">Quem Somos</a></li>
                        <li><a href="">História</a></li>
                        <li><a href="">Alianças</a></li>
                        <li><a href="">Norteadores</a></li>
                        <li><a href="">Pessoas</a></li>
                        <li><a href="">Abrangência</a></li>
                    </ul>
                </div>

                <div class="col d-none d-lg-block">
                    <ul class="footer-links">
                        <li><a href="">Indústria</a></li>
                        <li><a href="">Áreas de Atuação</a></li>
                    </ul>
                </div>

                <div class="col d-none d-lg-block"></div>

                <div class="col d-none d-lg-block">
                    <ul class="footer-links">
                        <li><a href="">Artigos</a></li>
                        <li><a href="">Imprensa</a></li>
                        <li><a href="">Eventos</a></li>
                        <li><a href="">Institucional</a></li>
                        <li><a href="">Indústria</a></li>
                        <li><a href="">Advogados</a></li>
                    </ul>
                </div>

                <div class="col d-none d-lg-block">
                    <ul class="footer-links">
                        <li><a href="">Trabalhe Conosco</a></li>
                        <li><a href="">Alumni</a></li>
                    </ul>
                </div>

                <div class="col d-none d-lg-block">
                    <ul class="footer-links">
                        <li><a href="">Mapa</a></li>
                        <li><a href="">Trabalhe Conosco</a></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>@include('component.area-restrita')</li>
                    </ul>
                </div>
            </nav>
        </div>

        <div class="col-12">
            <div class="row justify-content-between no-gutters copyright wrap">
                <div class="col-12 col-lg-6">
                    2019 | Todos os direitos reservados.
                </div>

                <div class="col-12 col-lg-6 copyright-link">
                    <a href="http://www.plano.cc" target="_blank" rel="noopener">Plano</a>
                </div>
            </div>
        </div>
    </div>
</footer>
