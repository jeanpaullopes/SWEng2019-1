import React from 'react';

import SvgLogo from '../Svg/SvgLogo';

import './Header.scss';

const Header = () => {
    return (
        <header className="content-padding-y">
            <div className="container">
                <div className="row align-items-center justify-content-between no-gutters">
                    <div className="col-10 col-lg-5">
                        <a href="/" aria-label="Home">
                            <div>
                                <SvgLogo />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
