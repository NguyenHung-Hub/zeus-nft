import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardProvide.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function CardProvide({ name, descriptions, icon }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card-icon')}>
                <img className={cx('icon')} src={icon} alt={name} />
            </div>
            <div className={cx('card-body')}>
                <p className={cx('title')}>{name}</p>
                <p className={cx('descriptions')}>{descriptions}</p>
            </div>
        </div>
    );
}

CardProvide.propTypes = {
    name: PropTypes.string.isRequired,
    descriptions: PropTypes.string.isRequired,
};

export default CardProvide;
