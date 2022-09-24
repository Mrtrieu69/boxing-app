import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link to="/" className={cx('home')}>
                    BoxingApp
                </Link>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search" className={cx('input')} />
                </div>
                <div className={cx('user')}>
                    <p className={cx('name')}>Комаров Александр Петрович</p>
                    <img src="/images/users/avatar.png" alt="" className={cx('avatar')} />
                </div>
            </div>
        </div>
    );
};

export default Header;
