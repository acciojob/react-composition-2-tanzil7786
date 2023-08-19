import React from 'react';

class Modal extends React.Component {
  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { show, onClose, children } = this.props;

    if (!show) {
      return null;
    }

    return (
      <div className="modal-overlay" onClick={this.handleOverlayClick}>
        <div className="modal-dialog">
          <button className="modal-close" onClick={onClose}>
            Close
          </button>
          <p className="modal-p">{children}</p>
        </div>
      </div>
    );
  }
}

export default Modal;