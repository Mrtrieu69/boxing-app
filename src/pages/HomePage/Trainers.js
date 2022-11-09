import React from 'react';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './HomePage.module.scss';
import { StartFill, StartOuter } from '../../components/Icons';
import axiosClient from '../../api/axiosClient';
import { LoaderBox, Modal } from '../../components';

const cx = classNames.bind(styles);

const Trainers = () => {
    const [trainers, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isShowModal, setIsShowModal] = useState(false);
    const [showTrainer, setShowTrainer] = useState(null);

    const handleCloseModal = () => {
        setIsShowModal(false);
    };

    const handleShowTrainer = (id) => {
        const trainer = trainers.find((trainer) => trainer.id === id);
        setIsShowModal(true);
        setShowTrainer(trainer);
    };

    useEffect(() => {
        const getTrainers = async () => {
            try {
                setIsLoading(true);
                const trainers = await axiosClient.get('/GetTrainer?format=json');
                setData(trainers.data);
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
            {isShowModal && (
                <Modal trainer onClose={handleCloseModal}>
                    <div
                        style={{ backgroundImage: "url('/images/trainers/bg-trainer.jpg')" }}
                        className={cx('trainer-layout')}
                    >
                        <div className={cx('blur')}></div>
                        <div className={cx('trainer-avatar')}>
                            <img src={showTrainer.photo_url} alt="" />
                        </div>
                        <div className={cx('feature')}>
                            <button className={cx('inbox')}>Сообщение</button>
                            <button className={cx('follow')}>Подписаться</button>
                        </div>
                        <div className={cx('trainer-name')}>
                            {showTrainer.patronymic} {showTrainer.name} {showTrainer.surname}
                        </div>
                    </div>
                    <div className={cx('trainer-block')}>
                        <div className={cx('statistics')}>
                            <div className={cx('item')}>
                                <span className={cx('number')}>21</span>
                                <span className={cx('type')}>Учеников</span>
                            </div>
                            <div className={cx('item')}>
                                <span className={cx('number')}>59</span>
                                <span className={cx('type')}>Подписчиков</span>
                            </div>
                            <div className={cx('item')}>
                                <span className={cx('number')}>3</span>
                                <span className={cx('type')}>Опыт, лет</span>
                            </div>
                        </div>
                        <div className={cx('desc')}>
                            <p className={cx('about')}>О себе</p>
                            <p>{showTrainer.info}</p>
                        </div>
                        <div className={cx('socials')}>
                            {showTrainer.messengers.map((messenger) => (
                                <a key={messenger.messenger.id} href={messenger.nickname} className={cx('social')}>
                                    <img src={messenger.messenger.icon_url} alt="" />
                                </a>
                            ))}
                        </div>
                    </div>
                </Modal>
            )}
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
                    {trainers?.map((trainer) => (
                        <div key={trainer.id} className="col l-2-4">
                            <div className={cx('info')}>
                                <div className={cx('trainer-card')}>
                                    <img
                                        onClick={() => handleShowTrainer(trainer.id)}
                                        src={trainer.photo_url}
                                        alt=""
                                        className={cx('trainer-image')}
                                    />
                                </div>
                                <p className={cx('name')}>
                                    {trainer.name} {trainer.patronymic}
                                </p>
                                <div className={cx('rating')}>
                                    {Array(5)
                                        .fill()
                                        .map((_, index) => {
                                            return (
                                                <span key={index} className={cx('start')}>
                                                    {index + 1 <= trainer.rating ? <StartFill /> : <StartOuter />}
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
