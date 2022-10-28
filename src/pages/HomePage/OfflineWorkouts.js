import React from 'react';
import classNames from 'classnames/bind';

import Courses from './Courses';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

const OfflineWorkouts = () => {
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Курсы</h2>
            <Courses />
        </div>
    );
};

export default OfflineWorkouts;
