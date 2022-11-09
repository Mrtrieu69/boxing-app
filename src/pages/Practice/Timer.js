import React from 'react';
import classNames from 'classnames/bind';

import styles from './Practice.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Circle } from '../../components/Icons';
import { Modal } from '../../components';

const cx = classNames.bind(styles);

const Timer = ({ onClose, duration }) => {
    const [seconds, setSeconds] = useState(() => parseInt(duration));

    const timer = useRef();

    const handleStopTimer = () => setSeconds(duration);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <button onClick={handleStopTimer} className={cx('controller')}>
                    Заново
                </button>
            </div>
        </Modal>
    );
};

export default Timer;
