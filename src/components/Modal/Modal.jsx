import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CommentsList } from '../CommentsList/CommentsList';
import { Form } from '../Form/Form';

import './Modal.scss';

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  addComment = (comment) => {
    this.setState(prevState => ({
      comments: [...prevState.comments, comment],
    }));
  };

  render() {
    const { comments } = this.state;
    const { isOpen, openModal } = this.props;

    return (
      <>
        { !isOpen
          && (
            <div className="overlay">
              <div className="modal">
                <div className="modal__header">
                  <h1>Комментарии</h1>
                  <button
                    type="button"
                    className="modal__close"
                    onClick={openModal}
                  >
                    x
                  </button>
                </div>
                <div className="modal__body">
                  <div className="app__comments comments">
                    <CommentsList comments={comments} />
                  </div>

                  <Form addComment={this.addComment} />
                </div>
              </div>
            </div>
          )
        }
      </>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};
