import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Style
import './PostForm.css';

export class PostForm extends Component {
  addPost = () => {
    const nameRef = this.refs.name;
    const titleRef = this.refs.title;
    const contentRef = this.refs.content;
    if (nameRef.value && titleRef.value && contentRef.value) {
      this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
      nameRef.value = titleRef.value = contentRef.value = '';
    }
  };

  render() {
    return (
      <div className="form">
        <div className="form-content">
          <h2 className="form-title">Create new post</h2>
          <input placeholder="Author's Name" className="form-field" ref="name" />
          <input placeholder='Post Title' className="form-field" ref="title" />
          <textarea placeholder='Post Content' className="form-field" ref="content" />
          <a className="post-submit-button" href="#" onClick={this.addPost}>Submit</a>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default PostForm;
