import React from 'react';
import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main-banner')}>
                <div className={cx('content')}>
                    <div className={cx('text-wrapper')}>
                        <h2>Create & sell your NFTs today</h2>
                        <p>
                            Velit, odio bibendum eu, viverra sit laoreet posuere. Ut scelerisque posuere massa amet.
                            Ornare lacinia vitae at vestibulum morbi. Volutpat libero curabitur feugiat risus dui
                            pulvinar. Elementum.
                        </p>
                    </div>

                    <div className={cx('button-wrapper')}>
                        <Button className={cx('let-sell-btn')}>Let's sell</Button>
                    </div>
                </div>

                <div className={cx('background', 'bg-shape-1')}>
                    <img className={cx('image-1')} src={images.bg_shape_1} alt="bg_shape_1" />
                </div>
                <div className={cx('background', 'bg-shape-2')}>
                    <img className={cx('image-2')} src={images.bg_shape_2} alt="bg_shape_2" />
                </div>
                <div className={cx('background', 'bg-shape-3')}>
                    <img className={cx('image-3')} src={images.bg_shape_3} alt="bg_shape_3" />
                </div>
                <div className={cx('background', 'bg-shape-4')}>
                    <img className={cx('image-4')} src={images.bg_shape_4} alt="bg_shape_4" />
                </div>
            </div>

            <div className={cx('sub-banner')}>
                <img className={cx('logo-item')} src={images.logo1} alt="logo_1" />
                <img className={cx('logo-item')} src={images.logo2} alt="logo_2" />
                <img className={cx('logo-item')} src={images.logo3} alt="logo_3" />
                <img className={cx('logo-item')} src={images.logo} alt="logo_4" />
                <img className={cx('logo-item')} src={images.logo4} alt="logo_5" />
                <img className={cx('logo-item')} src={images.logo5} alt="logo_6" />
            </div>
        </div>
    );
}

export default Banner;
