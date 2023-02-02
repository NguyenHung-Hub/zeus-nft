import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CardFAQ.module.scss';
import PropTypes from 'prop-types';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CardFAQ({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleShowAnswer = () => setShowAnswer(!showAnswer);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('card-head')}>
                <p className={cx('question')}>{question}</p>

                <img
                    className={cx('more-btn')}
                    onClick={handleShowAnswer}
                    src={showAnswer ? images.angle_up : images.angle_down}
                    alt="toggle button"
                />
            </div>
            {showAnswer && <p className={cx('answer')}>{answer}</p>}
        </div>
    );
}

CardFAQ.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
};

export default CardFAQ;
