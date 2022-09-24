import React from 'react';
import classNames from 'classnames/bind';

import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

const POPULAR_WORKOUTS = [
    { image: '/images/workouts/image-12.png', label: 'Упражнение для детей', subLabel: 'от 12 до 16 лет' },
    { image: '/images/workouts/image-13.png', label: 'Упражнение в паре', subLabel: 'от 2 до 3 человека' },
    { image: '/images/workouts/image-13.png', label: 'Упражнение в паре', subLabel: 'от 2 до 3 человека' },
    { image: '/images/workouts/image-12.png', label: 'Упражнение для детей', subLabel: 'от 12 до 16 лет' },
    { image: '/images/workouts/image-12.png', label: 'Упражнение для детей', subLabel: 'от 12 до 16 лет' },
];

const PopularWorkouts = () => {
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Популярные тренировки</h2>
            <div className="row">
                {POPULAR_WORKOUTS.map((item, id) => (
                    <div key={id} className="col l-2-4">
                        <div className={cx('card')}>
                            <img src={item.image} alt="" className={cx('image-workout')} />
                            <div className={cx('content')}>
                                <p className={cx('label')}>{item.label}</p>
                                <p className={cx('sub-label')}>{item.subLabel}</p>
                            </div>
                            <div className={cx('layout')}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularWorkouts;
