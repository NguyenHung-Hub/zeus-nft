import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ScrollTopButton.module.scss';
import Button from '../Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ScrollTopButton() {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        console.log('topppp');
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <>
            {visible && (
                <div className={cx('scroll-to-top')} onClick={scrollToTop}>
                    <img src={images.chevron_up} alt="scroll to top" />
                </div>
            )}
        </>
    );
}

export default ScrollTopButton;
