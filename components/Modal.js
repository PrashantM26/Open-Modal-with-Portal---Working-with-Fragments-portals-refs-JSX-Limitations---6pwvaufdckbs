import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

 //add code here
  return ReactDOM.createPortal(
    <div className='modal'>
      
      <div style={{ backgroundColor: 'white', padding: '2rem', position: 'relative' }} onClick={(e) => e.stopPropagation()} >
   //add code here
        {children}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>,
    document.body
  )
};

export default Modal;
