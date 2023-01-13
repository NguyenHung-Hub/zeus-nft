import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Banner from '~/layouts/components/Banner';
import HotCollections from '~/layouts/components/HotCollections';
import OurTeam from '~/layouts/components/OurTeam';
import Provide from '~/layouts/components/Provide';
import Testimonials from '~/layouts/components/Testimonials';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <HotCollections />
            <OurTeam />
            <Provide />
            <Testimonials />
        </div>
    );
}

export default Home;
