import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/ArticleListItem/ArticleListItem.css';

// Import Actions
import { fetchArticle } from '../../ArticleActions';

// Import Selectors
import { getArticle } from '../../ArticleReducer';

export function ArticleDetailPage(props) {
  return (
    <div>
      <Helmet title={props.article.title} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.article.title}</h3>
        <p className={styles['author-name']}><FormattedMessage id="by" /> {props.article.name}</p>
        <p className={styles['post-desc']}>{props.article.content}</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
PostDetailPage.need = [params => {
  return fetchPost(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    article: getArticle(state, props.params.cuid),
  };
}

ArticleDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ArticleDetailPage);
