import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { Heart } from '../../components/Icons';
import styles from './Course.module.scss';

const cx = classNames.bind(styles);

const CoursePage = () => {
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
                        <img src="/images/users/trainer.png" alt="" className={cx('avatar')} />
                        <h3 className={cx('name')}>Александр Комаров</h3>
                    </div>

                    <div className={cx('container')}>
                        <div className={cx('list')}>
                            <div className={cx('item', 'active')}>
                                <div className={cx('item-left')}>1</div>
                                <div className={cx('item-right')}>
                                    <img src="/images/workouts/image-6.png" alt="" className={cx('image')} />
                                    <div className={cx('desc')}>
                                        <p className={cx('title')}>Для новичков</p>
                                        <div className={cx('time')}>3 минуты</div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('item-left')}>2</div>
                                <div className={cx('item-right')}>
                                    <img src="/images/workouts/image-6.png" alt="" className={cx('image')} />
                                    <div className={cx('desc')}>
                                        <p className={cx('title')}>Для новичков</p>
                                        <div className={cx('time')}>3 минуты</div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('item')}>
                                <div className={cx('item-left')}>3</div>
                                <div className={cx('item-right')}>
                                    <img src="/images/workouts/image-6.png" alt="" className={cx('image')} />
                                    <div className={cx('desc')}>
                                        <p className={cx('title')}>Для новичков</p>
                                        <div className={cx('time')}>3 минуты</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('main')}>
                    <div className={cx('video')}>
                        <img src="/images/workouts/image-7.png" alt="" />
                    </div>
                </div>
                <div className={cx('info')}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At, delectus. Accusamus aut quasi, voluptas
                    eos ullam aliquid sapiente commodi iusto odio exercitationem alias, possimus illum, voluptatibus
                    error. Consequuntur, cum temporibus.
                </div>
            </div>
        </div>
    );
};
export default CoursePage;
