import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import components
import PostList from '../../components/PostList';
import PostForm from '../../components/PostForm/PostForm';

// Import Actions
import { addPostRequest, fetchPosts, deletePostRequest } from '../../PostActions';

// Import Selectors
import { getPosts } from '../../PostReducer';

import './PostListPage.css';

class PostListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) {
      this.props.dispatch(deletePostRequest(post));
    }
  };

  handleAddPost = (name, title, content) => {
    this.props.dispatch(addPostRequest({ name, title, content }));
  };

  render() {
    return(
      <div className="container">
        <PostForm addPost={this.handleAddPost} />
        <PostList posts={this.props.posts} handleDeletePost={this.handleDeletePost} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.data,
  };
}

PostListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PostListPage);