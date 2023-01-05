import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
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

            <div className={cx('nav-center')}>
                <Link to={'/'}>
                    <img src={images.logo} alt="Zeus" />
                </Link>
            </div>

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
        </div>
    );
}

export default Header;
