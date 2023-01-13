import React from 'react';
import classNames from 'classnames/bind';
import styles from './Testimonials.module.scss';
import CardTestimonial from '~/components/CardTestimonial';
import testimonials from '~/mockupData/testimonials';

const cx = classNames.bind(styles);

function Testimonials() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('section-head')}>
                <div className={cx('title')}>Testimonials</div>
            </div>
            <div className={cx('section-body')}>
                {testimonials.map((testimonial, index) => (
                    <CardTestimonial key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
