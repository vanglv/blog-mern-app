import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import './PostListItem.css';

function PostListItem(props) {
  return (
    <div className="single-post">
      <h3 className="post-title">
        {props.post.title}
      </h3>
      <p className="author-name">{props.post.name}</p>
      <p className="post-desc">{props.post.content}</p>
      <p className="post-action"><a href="#" onClick={props.onDelete}>Delete</a></p>
      <hr className="divider" />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
