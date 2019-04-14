<header class="header">
    <div class="row align-items-center align-items-xl-end justify-content-between no-gutters header-top wrap">
        <div class="col header-svg-logo">
            <a href="/"><?= file_get_contents(asset('assets/img/svg/svg-lippert.svg')); ?></a>
        </div>

        @if ($agent->isDesktop())
            <div class="col-8 header-menu">
                <nav class="menu wrap">
                    @include('./component.menu-top')
                </nav>
            </div>
        @endif

        <div class="col header-right">
            @if ($agent->isMobile())
                <button class="header-btn-menu" data-trigger-header-btn-menu>
                    <div class="header-svg-menu">
                        <?= file_get_contents(asset('assets/img/svg/svg-menu.svg')); ?>
                    </div>

                    <div class="header-svg-close">
                        <?= file_get_contents(asset('assets/img/svg/svg-close.svg')); ?>
                    </div>
                </button>
            @else
                <div class="row justify-content-between no-gutters">
                    <div class="col-12">
                        @include('component.area-restrita')
                    </div>

                    <div class="col-6 align-self-end header-language">
                        <button class="header-btn-language" data-trigger-header-btn-language>
                            <span>PT</span> <?= file_get_contents(asset('assets/img/svg/svg-globe.svg')); ?>
                        </button>
                    </div>

                    <div class="col-6 align-self-end header-search">
                        <button class="header-btn-search" data-trigger-header-btn-search>
                            <?= file_get_contents(asset('assets/img/svg/svg-search.svg')); ?>
                        </button>
                    </div>
                </div>
            @endif
        </div>
    </div>

    @if ($agent->isMobile())
        <div class="header-menu-mobile">
            <nav class="menu wrap">
                @include('./component.menu-top')
            </nav>

            <div class="text-center wrap">
                @include('component.area-restrita')
            </div>

            <div class="header-search wrap">
                <button data-trigger-header-btn-search>
                    <?= file_get_contents(asset('assets/img/svg/svg-search.svg')); ?>
                    <span>Pesquisar</span>
                </button>

                <form action="" class="form">
                    <div class="row no-gutters">
                        <div class="col-10">
                            <input type="text" value="" placeholder="Digite aqui o que você procura?">
                        </div>

                        <div class="col-2">
                            <button type="submit">
                                <?= file_get_contents(asset('assets/img/svg/svg-search.svg')); ?>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="header-language text-center wrap">
                <button data-trigger-header-btn-language>
                    <ul>
                        <li>
                            <span data-language-text>PT</span> <?= file_get_contents(asset('assets/img/svg/svg-globe.svg')); ?>
                        </li>
                        <li>
                            <span>Idioma</span>
                        </li>
                        <li>
                            <?= file_get_contents(asset('assets/img/svg/svg-arrow-down.svg')); ?>
                        </li>
                    </ul>
                </button>

                <div class="form header-language-list text-center">
                    <a href="#" class="custom-radio">
                        <input type="radio" id="pt" name="language" value="pt" class="custom-control-input">
                        <label for="pt">Português</label>
                    </a>

                    <a href="#" class="custom-radio">
                        <input type="radio" id="en" name="language" value="en" class="custom-control-input">
                        <label for="en">English</label>
                    </a>

                    <a href="#" class="custom-radio">
                        <input type="radio" id="de" name="language" value="de" class="custom-control-input">
                        <label for="de">Deutsch</label>
                    </a>
                </div>
            </div>
        </div>
    @else
        <div class="row align-items-center justify-content-center no-gutters header-menu-desktop wrap">
            <div class="col-6">
                <div class="header-language">
                    <div class="form header-language-list text-center">
                        <a href="#" class="custom-radio">
                            <input type="radio" id="pt" name="language" value="pt" class="custom-control-input">
                            <label for="pt">Português</label>
                        </a>

                        <a href="#" class="custom-radio">
                            <input type="radio" id="en" name="language" value="en" class="custom-control-input">
                            <label for="en">English</label>
                        </a>

                        <a href="#" class="custom-radio">
                            <input type="radio" id="de" name="language" value="de" class="custom-control-input">
                            <label for="de">Deutsch</label>
                        </a>
                    </div>
                </div>

                <div class="header-search">
                    <form action="" class="form">
                        <div class="row no-gutters">
                            <div class="col-10">
                                <input type="text" value="" placeholder="Digite aqui o que você procura?">
                            </div>

                            <div class="col-2">
                                <button type="submit">
                                    <?= file_get_contents(asset('assets/img/svg/svg-search.svg')); ?>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="header-close">
                    <button data-trigger-header-btn-close>
                        <span>Fechar</span> <?= file_get_contents(asset('assets/img/svg/svg-close.svg')); ?>
                    </button>
                </div>
            </div>
        </div>
    @endif
</header>
