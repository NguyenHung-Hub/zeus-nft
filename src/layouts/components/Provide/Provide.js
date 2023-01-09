import React from 'react';
import classNames from 'classnames/bind';
import styles from './Provide.module.scss';
import provideServices from '~/mockupData/provideServices';
import CardProvide from '~/components/CardProvide';

const cx = classNames.bind(styles);

function Provide() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-head')}>
                <h2 className={cx('title')}> We Provide</h2>
                <div className={cx('descriptions')}>
                    Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
                    Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
                </div>
            </div>

            <div className={cx('section-body')}>
                {provideServices.map((service, index) => (
                    <CardProvide key={index} {...service} />
                ))}
            </div>
        </div>
    );
}

export default Provide;
