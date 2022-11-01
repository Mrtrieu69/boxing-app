import React from 'react';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './HomePage.module.scss';
import { StartFill, StartOuter } from '../../components/Icons';
import axiosClient from '../../api/axiosClient';

const cx = classNames.bind(styles);

const Trainers = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const getTrainers = async () => {
            try {
                const data = await axiosClient.get('/GetTrainer?format=json');
                console.log(data.data);
                setData(data.data);
            } catch (e) {
                console.log(e);
            }
        };

        getTrainers();
    }, []);
    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Тренеры</h2>
            <div className="row">
                {data?.map((item, id) => (
                    <div key={id} className="col l-2-4">
                        <div className={cx('info')}>
                            <div className={cx('trainer-card')}>
                                <img src={item.photo_url} alt="" className={cx('trainer-image')} />
                            </div>
                            <p className={cx('name')}>
                                {item.name} {item.patronymic}
                            </p>
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
