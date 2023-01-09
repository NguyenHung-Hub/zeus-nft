import React from 'react';
import classNames from 'classnames/bind';
import styles from './OurTeam.module.scss';
import { profiles } from '~/mockupData';
import CardProfile from '~/components/CardProfile';

const cx = classNames.bind(styles);

function OurTeam() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-head')}>
                <h2 className={cx('title')}> Our Team</h2>
                <div className={cx('descriptions')}>
                    Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
                    Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
                </div>
            </div>

            <div className={cx('section-body')}>
                {profiles.map((profile, index) => (
                    <CardProfile key={index} {...profile} />
                ))}
            </div>
        </div>
    );
}

export default OurTeam;
