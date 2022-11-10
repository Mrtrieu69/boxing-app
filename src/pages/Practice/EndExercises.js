import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Practice.module.scss';
import { Modal } from '../../components';

const cx = classNames.bind(styles);

const colors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'];

const levels = ['confetti-slow', 'confetti-medium', 'confetti-fast'];

const getRandom = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
};

const EndExercises = ({ onPauseCurrentVideo, isEnd, to }) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const navigate = useNavigate();
    const congratulationRef = useRef();
    const interval = useRef();

    const handleClose = () => {
        setIsShowModal(false);
    };

    const handleEndExercises = () => {
        navigate(to);
    };

    const handleClick = () => {
        setIsShowModal(true);
        onPauseCurrentVideo();
    };

    useEffect(() => {
        if (isShowModal && isEnd) {
            interval.current = setInterval(() => {
                const div = document.createElement('div');
                div.className = `${cx('confetti')} ${cx(getRandom(levels))}`;
                div.style.backgroundColor = getRandom(colors);
                div.style.left = `${Math.floor(Math.random() * 320)}px`;

                setTimeout(() => {
                    if (div && congratulationRef.current) {
                        congratulationRef.current.removeChild(div);
                    }
                    return;
                }, 2000);
                congratulationRef.current.appendChild(div);
            }, 50);
        }

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, [isEnd, isShowModal]);

    return (
        <>
            <div onClick={handleClick} className={cx('end')}>
                {isEnd ? 'Закончить цикл тренировок' : 'Закончить тренировку'}
            </div>
            {isShowModal && (
                <Modal onClose={handleClose}>
                    {isEnd ? (
                        <div ref={congratulationRef} className={cx('congratulation')}>
                            <img
                                src="/images/notion/congratulation.png"
                                className={cx('congratulation-image')}
                                alt=""
                            />
                            <p className={cx('congratulation-title')}>Поздравляем</p>
                            <p className={cx('congratulation-label')}>Вы проделали хорошую работу!</p>
                            <button onClick={handleEndExercises}>Продолжить</button>
                        </div>
                    ) : (
                        <div className={cx('warning')}>
                            <p className={cx('warning-text')}>Вы действительно хотите закончить тренировку?</p>
                            <div className={cx('btns')}>
                                <button className={cx('btn-yes')} onClick={handleEndExercises}>
                                    Да
                                </button>
                                <button onClick={handleClose}>Нет, продолжу!</button>
                            </div>
                        </div>
                    )}
                </Modal>
            )}
        </>
    );
};

export default EndExercises;
