import React from 'react';
import classNames from 'classnames/bind';

import styles from './Practice.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Circle } from '../../components/Icons';
import { Modal } from '../../components';

const cx = classNames.bind(styles);

const Timer = ({ onLoadedData, onNext, onClose, duration }) => {
    const [seconds, setSeconds] = useState(() => parseInt(duration));

    const timer = useRef();
    const audioRef = useRef();

    const handleReplayTimer = () => {
        audioRef.current.load();
        setSeconds(duration);
    };

    const formatTime = (time) => {
        const minute = parseInt(time / 60);
        const second = parseInt(time % 60);

        return `${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
    };

    const dashOffSet = () => parseInt(284 * (seconds / duration));

    const rotate = () => parseInt(360 - 360 * (seconds / duration));

    useEffect(() => {
        if (seconds > 0) {
            timer.current = setTimeout(() => setSeconds(seconds - 1), 1000);
        }

        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, [seconds]);

    return (
        <Modal onClose={onClose}>
            <div className={cx('timer')}>
                <div className={cx('timer-block')}>
                    <Circle />
                    <div className={cx('timer-number')}>{formatTime(seconds)}</div>
                    <svg className={cx('svg')}>
                        <circle style={{ strokeDashoffset: dashOffSet() }} cx="45" cy="45" r="45"></circle>
                    </svg>
                    <div style={{ transform: `rotate(${rotate()}deg)` }} className={cx('dot-block')}>
                        <div className={cx('dot')}></div>
                    </div>
                </div>
                <div className={cx('controllers', { done: seconds === 0 })}>
                    <button onClick={handleReplayTimer} className={cx('controller')}>
                        Заново
                    </button>
                    {seconds === 0 && (
                        <button onClick={onNext} className={cx('controller')}>
                            Следующее упражнение
                        </button>
                    )}
                </div>
            </div>
            <audio onLoadedData={onLoadedData} ref={audioRef} autoPlay>
                <source src="/audio/timer.mp3" type="audio/mp3" />
            </audio>
        </Modal>
    );
};

export default Timer;
