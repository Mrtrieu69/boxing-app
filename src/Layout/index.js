import React from 'react';
import classNames from 'classnames/bind';

import styles from './Layout.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('layout-scroll')}>
                <div className={cx('container')}>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
