import React from 'react';
import classNames from 'classnames/bind';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import styles from './Login.module.scss';
import { Logo } from '../../components/Icons';

const cx = classNames.bind(styles);

const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const Login = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login')}>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    <h1 className={cx('name')}>
                        <Logo />
                    </h1>
                    <img className={cx('gloves')} src="/images/login/gloves.png" alt="" />
                </div>
                <figure className={cx('banner')}>
                    <img className={cx('image')} src="/images/login/login.png" alt="" />
                </figure>
            </div>
        </div>
    );
};

export default Login;
