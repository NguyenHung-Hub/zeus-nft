import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardProfile.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function CardProfile({ name, position, avatar }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card-avatar')}>
                <img className={cx('avatar')} src={avatar} alt={name} />
            </div>
            <div className={cx('card-body')}>
                <p className={cx('title')}>{name}</p>
                <p className={cx('position')}>{position}</p>
            </div>
        </div>
    );
}

CardProfile.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

export default CardProfile;
