import classNames from 'classnames/bind';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';

import { Heart } from '../../components/Icons';
import styles from './CoursePage.module.scss';

const cx = classNames.bind(styles);

const CoursePage = () => {
    const { courseId } = useParams();
    const [data, setData] = useState();
    const [currentTraining, setCurrentTraining] = useState(1);

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
    }, [currentTraining, data]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <Link to="/" className={cx('start')}>
                    Начать тренировки
                </Link>
                <Link to="/" className={cx('all')}>
                    Все тренировки
                </Link>
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
                                <div
                                    key={training.id}
                                    onClick={() => setCurrentTraining(training.id)}
                                    className={cx('item', { active: currentTraining === training.id })}
                                >
                                    <div className={cx('item-left')}>{training.id}</div>
                                    <div className={cx('item-right')}>
                                        <img src="/images/workouts/image-6.png" alt="" className={cx('image')} />
                                        <div className={cx('desc')}>
                                            <p className={cx('title')}>{training.title}</p>
                                            <div className={cx('time')}>3 минуты</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('main')}>
                    <video
                        ref={videoRef}
                        poster={data?.trainings[currentTraining - 1].photo_url}
                        className={cx('video')}
                        width="350"
                        height="560"
                        controls
                    >
                        <source src={data?.trainings[currentTraining - 1].exercises[0].video_url} type="video/mp4" />
                    </video>
                </div>
                <div className={cx('info')}>{data?.trainings[currentTraining - 1].description}</div>
            </div>
        </div>
    );
};
export default CoursePage;
