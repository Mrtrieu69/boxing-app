import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './Courses.module.scss';

const cx = classNames.bind(styles);

const Course = ({ id, photo_url, description, title, readiness }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleClick = (idCourse, readiness) => {
        if (readiness) {
            navigate(`/courses/${idCourse}/trainings/1`);
        } else {
            toast.warn('Курс еще не готов...');
        }

        return;
    };

    return (
        <div className="col l-2-4">
            <div onClick={() => handleClick(id, readiness)} className={cx('card')}>
                <img onLoad={handleLoad} className={cx('image')} src={photo_url} alt={title} />
                <div className={cx('body')}>
                    <p className={cx('body-label')}>{title}</p>
                    <p className={cx('sub-label')}>{description}</p>
                </div>
                {isLoading && <div className={cx('loader')}></div>}
            </div>
        </div>
    );
};

export default Course;
