import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({
  name,
  message,
}) => (
  <div className="comment">
    <div className="comment__content">
      <div className="comment__name">
        <h3>{name}</h3>
      </div>

      <div className="comment__message">
        <p>{message}</p>
      </div>
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
