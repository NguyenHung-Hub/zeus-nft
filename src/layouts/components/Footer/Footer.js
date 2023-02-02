import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-wrapper')}>
                <div className={cx('services')}>
                    <div className={cx('link')}>Terms & Conditions</div>
                    <div className={cx('link')}>Privacy Policy</div>
                </div>

                <Link to={'/'}>
                    <img src={images.logo} alt="logo" />
                </Link>
                <div className={cx('services')}>
                    <div className={cx('link')}>Cookies</div>
                    <div className={cx('link')}>Refunds</div>
                    <div className={cx('link')}>License</div>
                </div>
            </div>
            <div className={cx('separator')}></div>
            <div className={cx('bottom-wrapper')}>&copy; Copyright 2022 Zeus UI</div>
        </div>
    );
}

export default Footer;
