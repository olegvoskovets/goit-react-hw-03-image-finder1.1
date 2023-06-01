//import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
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
            <CloseIcon className={css.Svg} />
          </button>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
