import axios from 'axios';

// Export Constants
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const SET_EDIT = 'SET_EDIT';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

// Export Actions

// Get Post
export const fetchArticles = () => dispatch => {
  axios
    .get('http://localhost:8000/api/articles')
    .then(res =>
      dispatch({
        type: FETCH_ARTICLES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_ARTICLES,
        payload: null
      })
    );
};

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addPost(res.post)));
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}
