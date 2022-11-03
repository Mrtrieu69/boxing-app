import React from 'react';
import classNames from 'classnames/bind';

import styles from './LoaderBox.module.scss';

const cx = classNames.bind(styles);

const LoaderBox = () => {
    return <div className={cx('loader')}></div>;
};

export default LoaderBox;
