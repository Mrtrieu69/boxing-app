import React from 'react';
import classNames from 'classnames/bind';
import { Link, useParams, useNavigate } from 'react-router-dom';

import styles from './NotFound.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const NotFound = () => {
    const path = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (path['*'] === 'login') {
            navigate('/');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('layout', 'left-top')}></div>
            <div className={cx('layout', 'right-top')}></div>
            <div className={cx('layout', 'left-bottom')}></div>
            <div className={cx('layout', 'right-bottom')}></div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('body')}>
                        <Link to="/" className={cx('nav')}>
                            <h3>BoxingApp</h3>
                        </Link>
                        <div className={cx('error')}>
                            <p className={cx('error-code')}>404</p>
                            <p className={cx('error-notion')}>Что-то пошло не так!</p>
                            <Link to="/" className={cx('error-nav')}>
                                Вернуться на главную
                            </Link>
                        </div>
                    </div>
                    <div className={cx('body')}>
                        <img src="/images/notion/error.png" className={cx('error-image')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
