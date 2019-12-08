import React from 'react';
import { connect } from 'react-redux';
import { fetchAuthor } from '../actions';
import './Author.css';

class Author extends React.Component {
  componentDidMount() {
    this.props.fetchAuthor();
  }

  render() {
    const author = this.props.authors.find(
      author => author.id === this.props.authorId
    );

    if (!author) {
      return null;
    }

    const { name, role, place, avatar_url } = author;

    return (
      <div className="Author">
        <div className="Author-detail">
          <img className="Author-img" src={avatar_url} alt={name} />
          <p className="Author-name">{name}</p>
          <p className="Author-role">{role}</p>
          <p className="Author-place">
            <i className="fas fa-map-marker-alt"></i> {place}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { authors: state.authors };
};

export default connect(mapStateToProps, { fetchAuthor })(Author);
