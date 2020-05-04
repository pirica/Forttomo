import React from 'react';

const Modal = ({ handleClose, children }) => {
  return (
    <div style={containerStyle}>
      <div style={windowStyle}>
        {children}
        <div style={closeButtonStyle} onClick={handleClose}>
          <i className='far fa-times-circle' />
        </div>
      </div>
      <div style={backgroundStyle} onClick={handleClose} />
    </div>
  );
};

const containerStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  display: 'flex',
  width: '100%',
  height: '100vh',
};

const windowStyle = {
  position: 'relative',
  zIndex: 400,
  margin: 'auto',
};

const closeButtonStyle = {
  position: 'absolute',
  fontSize: '16pt',
  top: '-10px',
  right: '-10px',
  cursor: 'pointer',
};

const backgroundStyle = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  zIndex: 399,
  width: '100%',
  height: '100vh',
  backgroundColor: 'rgba(0,0,0, 0.9)',
};

export default Modal;
