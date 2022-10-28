import React from 'react';
import classNames from 'classnames/bind';

import styles from './HomePage.module.scss';
import { StartFill, StartOuter } from '../../components/Icons';

const cx = classNames.bind(styles);

const TRAINERS = [
    { name: 'Александр Комаров', image: '/images/trainers/trainer.png', rating: 4 },
    { name: 'Александр Комаров', image: '/images/trainers/trainer.png', rating: 1 },
    { name: 'Александр Комаров', image: '/images/trainers/trainer.png', rating: 2 },
    { name: 'Александр Комаров', image: '/images/trainers/trainer.png', rating: 3 },
    { name: 'Александр Комаров', image: '/images/trainers/trainer.png', rating: 4 },
];

const Trainers = () => {
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Тренеры</h2>
            <div className="row">
                {TRAINERS.map((item, id) => (
                    <div key={id} className="col l-2-4">
                        <div className={cx('info')}>
                            <div className={cx('trainer-card')}>
                                <img src={item.image} alt="" className={cx('trainer-image')} />
                            </div>
                            <p className={cx('name')}>{item.name}</p>
                            <div className={cx('rating')}>
                                {Array(5)
                                    .fill()
                                    .map((_, index) => {
                                        return (
                                            <span key={index} className={cx('start')}>
                                                {index + 1 <= item.rating ? <StartFill /> : <StartOuter />}
                                            </span>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trainers;
