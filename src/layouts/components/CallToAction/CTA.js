import React from 'react';
import classNames from 'classnames/bind';
import styles from './CTA.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function CTA() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box')}>
                <img src={images.bg_shape_5} alt="image" />

                <div className={cx('content')}>
                    <div className={cx('title')}>Ready to sell your NFTs?</div>
                    <div className={cx('sub-title')}>
                        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in
                        elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.{' '}
                    </div>
                    <Button className={cx('sell-right-now-btn')}>Sell right now</Button>
                </div>
                <img src={images.bg_shape_6} alt="image" />
            </div>
        </div>
    );
}

export default CTA;
