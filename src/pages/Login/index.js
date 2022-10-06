import React from 'react';
import classNames from 'classnames/bind';
// import { FcGoogle } from 'react-icons/fc';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const Login = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login')}>
                    <p className={cx('label')}>Авторизоваться</p>
                    {/* <button className={cx('google')}>
                        <span className={cx('icon')}>
                            <FcGoogle />
                        </span>
                        Login with google
                    </button> */}
                    <StyledFirebaseAuth className={cx('hello')} uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
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
