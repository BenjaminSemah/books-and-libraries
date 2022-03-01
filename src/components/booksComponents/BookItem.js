import React from 'react';

const BookItem = (props) => {
  <>
    <div className="book--card">
      <h2 className="book--title">{props.title}</h2>
      <h3 className="book--author">{props.author}</h3>
      <button className="remove--btn" type="button">Remove</button>
    </div>
  </>;
};

export default BookItem;
