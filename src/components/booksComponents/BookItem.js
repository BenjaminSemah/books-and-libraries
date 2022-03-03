import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks, removeBook } from '../../redux/books/books';

const BookItem = () => {
  const dispatch = useDispatch();
  const bookState = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  const removeHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  if (bookState !== []) {
    return (
      <>
        {bookState.map((book) => (
          <div key={book.item_id} className="book--card">
            <h2 className="book--title">{book.title}</h2>
            <p className="benji--test">Benji test</p>
            <button className="remove--btn" type="button" id={book.item_id} onClick={removeHandler}>
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
