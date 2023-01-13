import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardTestimonial.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function CardTestimonial({ name, username, testimonial, avatar }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card-head')}>
                <img className={cx('avatar')} src={avatar} alt={name} />
                <div className={cx('info')}>
                    <p className={cx('name')}>{name}</p>
                    <p className={cx('username')}>{username}</p>
                </div>
            </div>
            <div className={cx('card-body')}>
                <p className={cx('testimonial')}>{testimonial}</p>
            </div>
        </div>
    );
}

CardTestimonial.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
};

export default CardTestimonial;
