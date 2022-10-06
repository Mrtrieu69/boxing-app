import React from 'react';
import classNames from 'classnames/bind';

import styles from './TrainerPage.module.scss';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../../components/Icons';
import Lessons from './Lessons';

const cx = classNames.bind(styles);

const TrainerPage = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('info')}>
                    <img src="/images/users/trainer.png" alt="" className={cx('image')} />
                    <p className={cx('name')}>Александр комаров</p>
                </div>
                <Link to="/" className={cx('link')}>
                    <p className={cx('all-workouts')}>все тренировки</p>
                    <span className={cx('icon')}>
                        <ArrowRight />
                    </span>
                </Link>
            </div>
            <Lessons />
        </div>
    );
};

export default TrainerPage;
