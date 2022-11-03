import React from 'react';
import classNames from 'classnames/bind';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import styles from './Login.module.scss';

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
                    <h1 className={cx('name')}>BoxingApp</h1>
                </div>
                <figure className={cx('banner')}>
                    <img className={cx('image')} src="/images/login/login.png" alt="" />
                </figure>
            </div>
        </div>
    );
};

export default Login;
