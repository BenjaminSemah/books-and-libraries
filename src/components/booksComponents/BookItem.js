import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BookItem = () => {
  const bookState = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const removeHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  if (bookState !== []) {
    return (
      <>
        {bookState.map((book) => (
          <div key={book.id} className="book--card">
            <h2 className="book--title">{book.title}</h2>
            <h3 className="book--author">{book.author}</h3>
            <button className="remove--btn" type="button" id={book.id} onClick={removeHandler}>
              Remove
            </button>
          </div>
        ))}
      </>
    );
  }
  return (<h2>No books here. Add a new book</h2>);
};

export default BookItem;
