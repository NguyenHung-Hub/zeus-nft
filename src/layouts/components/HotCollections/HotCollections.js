import React from 'react';
import classNames from 'classnames/bind';
import styles from './HotCollectios.module.scss';
import CardProduct from '~/components/CardProduct';
import { products } from '~/mockupData';

const cx = classNames.bind(styles);

function HotCollectios() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-head')}>
                <h2 className={cx('title')}> Hottest Collections</h2>
                <div className={cx('descriptions')}>
                    Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
                    Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
                </div>
            </div>

            <div className={cx('section-body')}>
                {products.map((product, index) => (
                    <CardProduct {...product} />
                ))}
            </div>
        </div>
    );
}

export default HotCollectios;
