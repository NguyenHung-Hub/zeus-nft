import React from 'react';
import classNames from 'classnames/bind';
import styles from './FAQ.module.scss';
import { FAQ_list } from '~/mockupData';
import CardFAQ from '~/components/CardFAQ';

const cx = classNames.bind(styles);

function FAQ() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-left')}>
                <div className={cx('title')}>Frequently Asked Questions</div>
                <div className={cx('sub-title')}>
                    Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
                    Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.{' '}
                </div>
            </div>
            <div className={cx('section-right')}>
                {FAQ_list.map((faq, index) => (
                    <CardFAQ key={index} {...faq} />
                ))}
            </div>
        </div>
    );
}

export default FAQ;
