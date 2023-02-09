import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const NavLeft = () => {
    return (
        <div className={cx('nav-left')}>
            <Link to={'/'}>
                <div className={cx('nav-item')}>Home</div>
            </Link>
            <Link to={'/'}>
                <div className={cx('nav-item')}>University</div>
            </Link>
            <Link to={'/'}>
                <div className={cx('nav-item')}>Courses</div>
            </Link>
        </div>
    );
};

const NavRight = () => {
    return (
        <div className={cx('nav-right')}>
            <Link to={'/'}>
                <div className={cx('nav-item')}>Use cases</div>
            </Link>
            <Link to={'/'}>
                <div className={cx('nav-item')}>Plans</div>
            </Link>
            <Link to={'/'}>
                <div className={cx('nav-item')}>Resource</div>
            </Link>
        </div>
    );
};

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const toggle = () => {
        setToggleMenu(!toggleMenu);
    };

    const overlayOnClick = () => {
        setToggleMenu(false);
        console.log('asdfkalsjfkl');
    };

    return (
        <div id={cx('scroll-to-top')} className={cx('wrapper')}>
            <div className={cx('menu-wrapper')} onClick={toggle}>
                <img src={images.menu} alt="menu icon" />
            </div>
            <div className={cx('nav-desktop')}>
                <NavLeft />
                <div className={cx('nav-logo')}>
                    <Link to={'/'}>
                        <img src={images.logo} alt="Zeus" />
                    </Link>
                </div>
                <NavRight />
            </div>

            {toggleMenu && <div className={cx('nav-overlay')} onClick={overlayOnClick}></div>}

            <div className={cx('nav-mobile', toggleMenu ? 'open' : 'close')}>
                <div className={cx('close-menu-btn')} onClick={toggle}>
                    <img src={images.close} alt="close menu" />
                </div>
                <div className={cx('nav-mobile-body')}>
                    <NavLeft />
                    <NavRight />
                </div>
            </div>
        </div>
    );
}

export default Header;
