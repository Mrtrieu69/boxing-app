import classNames from 'classnames/bind';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

import styles from './CoursePage.module.scss';
import { ArrowRight, Heart } from '../../components/Icons';

const cx = classNames.bind(styles);

const CoursePage = () => {
    const { courseId, trainingId } = useParams();
    const [data, setData] = useState();

    const videoRef = useRef();

    useEffect(() => {
        const getCourse = async () => {
            try {
                const data = await axiosClient.get(`/GetCourse/${courseId}?format=json`);
                setData(data.data);
            } catch (e) {
                console.log(e);
            }
        };

        getCourse();
    }, [courseId]);

    useEffect(() => {
        if (videoRef) {
            videoRef.current.load();
        }
    }, [trainingId, data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('navs')}>
                <Link to="/" className={cx('nav')}>
                    Главная
                </Link>
                <span className={cx('icon')}>
                    <ArrowRight />
                </span>
                <Link to={`/courses/${courseId}/trainings/1`} className={cx('nav')}>
                    {data?.title}
                </Link>
                <span className={cx('icon')}>
                    <ArrowRight />
                </span>
                <p className={cx('nav', 'active')}>
                    {data?.trainings.find((training) => parseInt(trainingId) === training.id).title}
                </p>
            </div>
            <div className={cx('content')}>
                <div className={cx('sidebar')}>
                    <div className={cx('trainer')}>
                        <img src={data?.trainer.photo_url} alt="" className={cx('avatar')} />
                        <h3 className={cx('name')}>
                            {data?.trainer.name} {data?.trainer.patronymic}
                        </h3>
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('list')}>
                            {data?.trainings.map((training) => (
                                <Link
                                    key={training.id}
                                    to={`/courses/${courseId}/trainings/${training.id}`}
                                    className={cx('item', { active: parseInt(trainingId) === training.id })}
                                >
                                    <div className={cx('item-left')}>{training.id}</div>
                                    <div className={cx('item-right')}>
                                        <img src="/images/workouts/image-6.png" alt="" className={cx('image')} />
                                        <div className={cx('desc')}>
                                            <p className={cx('title')}>{training.title}</p>
                                            <div className={cx('time')}>3 минуты</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('main')}>
                    <div className={cx('like')}>
                        <div className={cx('icon-heart')}>
                            <Heart />
                        </div>
                        <p className={cx('quantity')}>
                            {data?.trainings.find((training) => parseInt(trainingId) === training.id).likes}
                        </p>
                    </div>
                    <video ref={videoRef} className={cx('video')} controls>
                        <source
                            src={
                                data?.trainings
                                    .find((training) => parseInt(trainingId) === training.id)
                                    .exercises.find((exercise) => exercise.exercise_type === 0).video_url
                            }
                            type="video/mp4"
                        />
                    </video>
                    <div className={cx('label')}>
                        {data?.trainings.find((training) => parseInt(trainingId) === training.id).title}
                    </div>
                </div>
                <div className={cx('info')}>
                    <div className={cx('description')}>
                        {data?.trainings.find((training) => parseInt(trainingId) === training.id).description}
                    </div>
                    <Link to={`/courses/${courseId}/trainings/${trainingId}/practice`} className={cx('start')}>
                        Начать тренировку
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default CoursePage;
