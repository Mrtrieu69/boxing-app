import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Courses.module.scss';
import axiosClient from '../../../api/axiosClient';
import Course from './Course';

const cx = classNames.bind(styles);

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCourses = async () => {
            try {
                const data = await axiosClient.get('/GetCourse/?format=json');
                const courses = data.data;

                setCourses(courses);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
            }
        };
        getCourses();
    }, []);

    if (isLoading)
        return (
            <div className="row">
                {Array(5)
                    .fill()
                    .map((_, id) => (
                        <div key={id} className="col l-2-4">
                            <div className={cx('card')}>
                                <div className={cx('loader')}></div>
                            </div>
                        </div>
                    ))}
            </div>
        );

    return (
        <div className="row">
            {courses?.map((course, id) => (
                <Course key={id} {...course} />
            ))}
        </div>
    );
};

export default Courses;
