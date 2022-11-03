import React from 'react';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './HomePage.module.scss';
import { StartFill, StartOuter } from '../../components/Icons';
import axiosClient from '../../api/axiosClient';
import { LoaderBox, Modal } from '../../components';

const cx = classNames.bind(styles);

const Trainers = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isShowMOdal, setIsShowModal] = useState(false);

    const handleCloseModal = () => {
        setIsShowModal(false);
    };

    useEffect(() => {
        const getTrainers = async () => {
            try {
                setIsLoading(true);
                const data = await axiosClient.get('/GetTrainer?format=json');
                setData(data.data);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
                setIsLoading(false);
            }
        };

        getTrainers();
    }, []);

    return (
        <div className={cx('container')}>
            <h2 className={cx('title')}>Тренеры</h2>
            {isShowMOdal && <Modal onClose={handleCloseModal} />}
            {isLoading ? (
                <div className="row">
                    <div className="col l-2-4">
                        <div className={cx('trainer-card')}>
                            <div className={cx('trainer-image-loader')}>
                                <LoaderBox />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row">
                    {data?.map((item, id) => (
                        <div key={id} className="col l-2-4">
                            <div className={cx('info')}>
                                <div className={cx('trainer-card')}>
                                    <img
                                        onClick={() => setIsShowModal(true)}
                                        src={item.photo_url}
                                        alt=""
                                        className={cx('trainer-image')}
                                    />
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
            )}
        </div>
    );
};

export default Trainers;
