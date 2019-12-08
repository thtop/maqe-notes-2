import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Author from './Author';
import moment from 'moment';

import './PostList.css';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    // static contents for display only
    //const postsTest = this.props.posts.filter(post => post.id <= 8);
    // const moment = [
    //   '1 week ago',
    //   '2 weeks ago',
    //   '3 weeks ago',
    //   '4 weeks ago',
    //   '4 weeks ago',
    //   '2 months ago',
    //   '2 months ago',
    //   '4 months ago'
    // ];

    // sort post
    const sortPost = this.props.posts.sort(
      (a, b) => a.created_at - b.created_at
    );

    // filter post
    const filterPost = sortPost.filter(post => post.id <= 8);

    return filterPost.map(post => {
      const splitDate = post.created_at.split(' ');
      return (
        <div className="PostList" key={post.id}>
          <div
            className={
              post.id % 2 === 0 ? 'PostList-container bg' : 'PostList-container'
            }
          >
            <div className="PostList-box">
              <div>
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="PostList-box-img"
                />
              </div>
              <div className="PostList-box-content">
                <h2>{post.title}</h2>
                <p>{post.body}</p>

                <p className="PostList-box-time">
                  <i className="far fa-clock"></i>{' '}
                  {moment(splitDate[0], 'YYYY-MM-DD').fromNow()}
                </p>
              </div>
            </div>
            <Author authorId={post.author_id} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
