import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    const currentUser = firebase.auth().currentUser;
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
                    <p className={cx('name')}>{currentUser.multiFactor.user.displayName}</p>
                    <img src={currentUser.multiFactor.user.photoURL} alt="" className={cx('avatar')} />
                </div>
                <a href="#!" onClick={() => firebase.auth().signOut()}>
                    Sign-out
                </a>
            </div>
        </div>
    );
};

export default Header;
