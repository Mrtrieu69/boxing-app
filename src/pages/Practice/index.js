import React, { useEffect, useState, useRef, createRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Practice.module.scss';
import { ArrowRight } from '../../components/Icons';
import axiosClient from '../../api/axiosClient';
import { LoaderBox } from '../../components';
import { ArrowLeftLarge, ArrowRightLarge } from '../../components/Icons';
import Timer from './Timer';
import EndExercises from './EndExercises';

const cx = classNames.bind(styles);

const Practice = () => {
    const { courseId, trainingId } = useParams();
    const [data, setData] = useState();
    const [exercises, setExercises] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [videoRefs, setVideoRefs] = useState([]);

    // For timer
    const [isTimerActive, setIsTimerActive] = useState(false);

    const listRef = useRef();

    const handleCloseTimer = () => setIsTimerActive(false);

    useEffect(() => {
        setVideoRefs((refs) =>
            Array(exercises?.length)
                .fill()
                .map((_, id) => refs[id] || createRef()),
        );
    }, [exercises]);

    useEffect(() => {
        const getCourse = async () => {
            try {
                setIsLoading(true);
                const data = await axiosClient.get(`/GetCourse/${courseId}?format=json`);
                const exercises = data.data.trainings.find(
                    (training) => parseInt(trainingId) === training.id,
                ).exercises;
                setExercises(exercises.filter((exercise) => exercise.exercise_type === 1));
                setData(data.data);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                console.log(e);
            }
        };

        getCourse();

        document.body.style.cssText = `
            --text-primary: #fff;
            --bg-primary: #000;
            --bg-btn: #CDCDCD;
        `;

        return () => {
            document.body.style.cssText = `
            --text-primary: #000;
            --bg-primary: #fff;
            --bg-btn: #000;
        `;
        };
    }, [courseId, trainingId]);

    useEffect(() => {
        listRef.current.style.transform = `translateX(-${currentExercise * 100}%)`;
        setIsTimerActive(false);

        return () =>
            setTimeout(() => {
                if (videoRefs[currentExercise]?.current) {
                    videoRefs[currentExercise].current.load();
                }
                return;
            }, 500);
    }, [currentExercise, videoRefs]);

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
                <Link to={`/courses/${courseId}/trainings/${trainingId}`} className={cx('nav')}>
                    {data?.trainings[trainingId - 1].title}
                </Link>
                <span className={cx('icon')}>
                    <ArrowRight />
                </span>
                <p className={cx('nav', 'active')}>Тренировка</p>
            </div>
            <div className={cx('container')}>
                <div
                    onClick={() => setCurrentExercise(currentExercise - 1)}
                    className={cx('prev', { disable: currentExercise <= 0 })}
                >
                    <ArrowLeftLarge />
                </div>
                <div className={cx('main')}>
                    <div className={cx('layout', 'top')}></div>
                    <div className={cx('layout', 'mid')}></div>
                    <div className={cx('layout', 'bot')}></div>
                    <div className={cx('slider')}>
                        <div ref={listRef} className={cx('list')}>
                            {isLoading ? (
                                <div className={cx('item')}>
                                    <div className={cx('video')}>
                                        <LoaderBox />
                                    </div>
                                </div>
                            ) : (
                                exercises?.map((exercise, index) => (
                                    <div key={exercise.id} className={cx('item')}>
                                        <div className={cx('video')}>
                                            <video ref={videoRefs[index]} className={cx('video')} controls>
                                                <source src={exercise.video_url} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => setCurrentExercise(currentExercise + 1)}
                    className={cx('next', { disable: currentExercise >= exercises?.length - 1 })}
                >
                    <ArrowRightLarge />
                </div>
                <div className={cx('panel')}>
                    <div className={cx('controls')}>
                        {!isTimerActive && (
                            <button className={cx('start')} onClick={() => setIsTimerActive(true)}>
                                Начать
                            </button>
                        )}
                        <EndExercises
                            isEnd={currentExercise === exercises.length - 1}
                            to={`/courses/${courseId}/trainings/${trainingId}`}
                        />
                    </div>
                    {isTimerActive && <Timer duration={60} onClose={handleCloseTimer} />}
                </div>
            </div>
        </div>
    );
};

export default Practice;
