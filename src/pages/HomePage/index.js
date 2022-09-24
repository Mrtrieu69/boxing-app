import React from 'react';
import classNames from 'classnames/bind';

import styles from './HomePage.module.scss';
import PopularWorkouts from './PopularWorkouts';
import OfflineWorkouts from './OfflineWorkouts';
import Trainers from './Trainers';

const cx = classNames.bind(styles);

const HomePage = () => {
    return (
        <div className={cx('wrapper')}>
            <PopularWorkouts />
            <OfflineWorkouts />
            <Trainers />
        </div>
    );
};

export default HomePage;
