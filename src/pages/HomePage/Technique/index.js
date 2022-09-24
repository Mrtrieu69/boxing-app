import React from 'react';
import classNames from 'classnames/bind';

import styles from './Technique.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const POPULAR_WORKOUTS = [
    { image: '/images/workouts/image-5.png', label: 'Техника ударов', subLabel: '5 упражнений' },
    { image: '/images/workouts/image-5-1.png', label: 'Джебы', subLabel: '5 упражнений' },
    { image: '/images/workouts/image-5-2.png', label: 'Способы битования', subLabel: '5 упражнений' },
    { image: '/images/workouts/image-5-3.png', label: 'Уклоны', subLabel: '5 упражнений' },
    { image: '/images/workouts/image-5-4.png', label: 'Техника ударов', subLabel: '5 упражнений' },
    { image: '/images/workouts/image-5.png', label: 'Техника ударов', subLabel: '5 упражнений' },
    { image: '/images/workouts/image-5-1.png', label: 'Джебы', subLabel: '5 упражнений' },
    { image: '/images/workouts/image-5-2.png', label: 'Способы битования', subLabel: '5 упражнений' },
    { image: '/images/workouts/image-5-3.png', label: 'Уклоны', subLabel: '5 упражнений' },
    { image: '/images/workouts/image-5-4.png', label: 'Техника ударов', subLabel: '5 упражнений' },
];

const Technique = () => {
    const [showMore, setShowMore] = useState(false);
    const [currentList, setCurrentList] = useState(POPULAR_WORKOUTS.slice(0, 5));

    const handleShowMore = () => {
        setShowMore(true);
        setCurrentList(POPULAR_WORKOUTS);
    };

    return (
        <>
            <div className="row">
                {currentList.map((item, id) => (
                    <div key={id} className="col l-2-4">
                        <div className={cx('card')} style={{ backgroundImage: `url(${item.image})` }}>
                            <div className={cx('body')}>
                                <p className={cx('body-label')}>{item.label}</p>
                                <p className={cx('sub-label')}>{item.subLabel}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx('block')}>
                {!showMore && (
                    <button onClick={handleShowMore} className={cx('control')}>
                        еще
                    </button>
                )}
            </div>
        </>
    );
};

export default Technique;
