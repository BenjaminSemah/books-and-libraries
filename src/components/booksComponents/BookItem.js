import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const {
    book: { title, author },
  } = props;

  return (
    <>
      <div className="book--card">
        <h2 className="book--title">{title}</h2>
        <h3 className="book--author">{author}</h3>
        <button className="remove--btn" type="button">Remove</button>
      </div>
    </>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookItem;
