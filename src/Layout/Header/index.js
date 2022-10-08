import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Tippy from '@tippyjs/react/headless';
import { FiLogOut } from 'react-icons/fi';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
    const currentUser = firebase.auth().currentUser;

    const renderResult = (attrs) => (
        <div className={cx('box')} tabIndex="-1" {...attrs}>
            <div onClick={() => firebase.auth().signOut()} className={cx('logout')}>
                <span className={cx('icon')}>
                    <FiLogOut />
                </span>
                Logout
            </div>
        </div>
    );
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
                    <Tippy placement="bottom-end" interactive delay={[0, 700]} render={renderResult}>
                        <img src={currentUser.multiFactor.user.photoURL} alt="" className={cx('avatar')} />
                    </Tippy>
                </div>
            </div>
        </div>
    );
};

export default Header;
