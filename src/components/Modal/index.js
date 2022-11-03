import React from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

let modalRoot = document.querySelector('#modal-root');

if (!modalRoot) {
    const modalRootDiv = document.createElement('div');
    modalRootDiv.id = 'modal-root';
    document.body.appendChild(modalRootDiv);
    modalRoot = modalRootDiv;
}

const Modal = ({ onClose }) => {
    return createPortal(
        <div className={cx('modal')}>
            <div onClick={onClose} className={cx('layout')}></div>
            <div className={cx('content')}></div>
        </div>,
        modalRoot,
    );
};

export default Modal;
