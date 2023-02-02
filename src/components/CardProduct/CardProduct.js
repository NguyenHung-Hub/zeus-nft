import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardProduct.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function CardProduct({ id, name, descriptions, image }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card-image')}>
                <img className={cx('image')} src={image} alt={name} />
            </div>
            <div className={cx('card-body')}>
                <p className={cx('title')}>{name}</p>
                <p className={cx('description')}>{descriptions}</p>
            </div>
        </div>
    );
}

CardProduct.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    descriptions: PropTypes.string.isRequired,
};

export default CardProduct;
