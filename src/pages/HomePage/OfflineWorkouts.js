import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
// import { useState } from 'react';

import Technique from './Technique';
// import Notion from './Notion';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

// const NAVS = [
//     { title: 'Техника ударов', component: <Technique /> },
//     { title: 'На мешке', component: <Notion /> },
//     { title: 'Комбинации 1', component: <Notion /> },
//     { title: 'Комбинации 2', component: <Notion /> },
//     { title: 'Комбинации 3', component: <Notion /> },
// ];

const OfflineWorkouts = () => {
    // const [currentNav, setCurrentNav] = useState('Техника ударов');

    // const handleChangeNav = (title) => {
    //     setCurrentNav(title);
    // };

    // useEffect(() => {
    //     const getCourses = async () => {
    //         const data = await fetch('http://37.140.195.207/api/GetCourse/?format=json');
    //         console.log(data);
    //     };

    //     getCourses();
    // }, []);

    return (
        <div className={cx('container')}>
            {/* <h2 className={cx('title')}>Оффлайн тренировки</h2> */}
            <h2 className={cx('title')}>Курсы</h2>
            {/* <div className={cx('navs')}>
                {NAVS.map((nav, id) => (
                    <button
                        key={id}
                        onClick={() => handleChangeNav(nav.title)}
                        className={cx('nav', { active: nav.title === currentNav })}
                    >
                        {nav.title}
                    </button>
                ))}
            </div>
            {NAVS.find((nav) => nav.title === currentNav).component} */}
            <Technique />
        </div>
    );
};

export default OfflineWorkouts;
