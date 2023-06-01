//import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal_root');

export class Modal extends Component {
  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdrop = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      this.props.onCloseModal();
    }
  };
  closeModal = () => {
    this.props.onCloseModal();
  };

  render() {
    return createPortal(
      <div className={css.Modal_backdroup} onClick={this.handleBackdrop}>
        <div className={css.Modal_contant}>
          <button
            type="button"
            className={css.closeBtn}
            onClick={this.closeModal}
          >
            X
          </button>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
// <>
//   <div className="modal-backdrop fade show" />

//   <div
//     className="modal fade show"
//     style={{ display: 'block' }}
//     onClick={this.handleBackdrop}
//   >
//     <div className="modal-dialog modal-dialog-centered">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title">Modal title</h5>
//           <button
//             type="button"
//             className="btn-close"
//             aria-label="Close"
//             onClick={this.props.onCloseModal}
//           />
//         </div>

//         <div className="modal-body">{this.props.children}</div>
//       </div>
//     </div>
//   </div>
// </>
