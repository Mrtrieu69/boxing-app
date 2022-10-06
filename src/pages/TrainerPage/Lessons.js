import React from 'react';
import classNames from 'classnames/bind';

import styles from './TrainerPage.module.scss';

const cx = classNames.bind(styles);

const Lessons = () => {
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Способы бинтования</h2>
        </div>
    );
};

export default Lessons;
