import React from 'react';
import PropTypes from 'prop-types';

import './CommentsList.scss';
import { Comment } from '../Comment/Comment';

export const CommentsList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <Comment key={comments[comment] + comment.name} {...comment} />
    ))}
  </>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }),
  ),
};

CommentsList.defaultProps = {
  comments: [],
};
