import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Courses.module.scss';
import axiosClient from '../../../api/axiosClient';
import Course from './Course';
import { LoaderBox } from '../../../components';
import ErrorServer from '../../ErrorServer';

const cx = classNames.bind(styles);

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errorServer, setErrorServer] = useState(false);

    useEffect(() => {
        const getCourses = async () => {
            try {
                const data = await axiosClient.get('/GetCourse/?format=json');
                const courses = data.data;

                setCourses(courses);
                setIsLoading(false);
            } catch (e) {
                setErrorServer(true);
                setIsLoading(false);
                console.log(e);
            }
        };
        getCourses();
    }, []);

    if (errorServer) {
        return <ErrorServer />;
    }

    if (isLoading)
        return (
            <div className="row">
                {Array(4)
                    .fill()
                    .map((_, id) => (
                        <div key={id} className="col l-2-4">
                            <div className={cx('card')}>
                                <LoaderBox />
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
