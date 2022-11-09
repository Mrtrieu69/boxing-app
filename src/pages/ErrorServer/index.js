import React from 'react';
import classNames from 'classnames/bind';

import styles from './ErrorServer.module.scss';

const cx = classNames.bind(styles);

const ErrorServer = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <a href="/" className={cx('nav')}>
                    BoxingApp
                </a>
                <img className={cx('setting-1')} src="/images/notion/setting-1.png" alt="" />
                <img className={cx('setting')} src="/images/notion/setting.png" alt="" />
                <img className={cx('error')} src="/images/notion/error.png" alt="" />
            </div>
            <div className={cx('container', 'container--separate')}>
                <div className={cx('content')}>
                    <div className={cx('error-code')}>500</div>
                    <div className={cx('error-text')}>Извините, непредвиденная ошибка</div>
                    <p className={cx('error-subtext')}>Попробуйте позже</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorServer;
