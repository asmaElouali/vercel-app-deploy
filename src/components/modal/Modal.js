import React, { useContext } from 'react'
import Restart from './Restart';
import { ModalContext } from '../../context/ModalContext';
import Win from './Win'

const Modal = () => {
  const { show,modalMode } = useContext(ModalContext)
  return (
    <>
     {show && (
    <div className='modal'>
        <div className="modal_content">
            <div className="container">
                {modalMode === 'winner' && <Win />}
                {modalMode === 'start' && <Restart />}
            </div>
        </div>
    </div>
    )}
    </>
  );
};

export default Modal;