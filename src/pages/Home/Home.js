import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Banner from '~/layouts/components/Banner';
import HotCollections from '~/layouts/components/HotCollections';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <HotCollections />
        </div>
    );
}

export default Home;
