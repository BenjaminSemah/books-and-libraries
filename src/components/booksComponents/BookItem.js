import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks, removeBook } from '../../redux/books/books';
import statusIcon from '../../images/status-icon.png';

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
            <div className="book--information">
              <div className="book--details">
                <p className="book--categroy">{book.category}</p>
                <h2 className="book--title">{book.title}</h2>
                <p className="benji--test">BOOKS AND LIBRARIES</p>
              </div>
              <div className="book--buttons">
                <button className="comments--btn right-border" type="button">Comments</button>
                <button className="remove--btn right-border" type="button" id={book.item_id} onClick={removeHandler}>
                  Remove
                </button>
                <button className="edit--btn" type="button">Edit</button>
              </div>
            </div>
            <div className="other--information">
              <div className="status--information">
                <img className="status--icon" src={statusIcon} alt="status icon" />
                <div>
                  <p className="percent--number">64%</p>
                  <p className="text--completed">Completed</p>
                </div>
              </div>
              <div className="chapter--information">
                <p className="current--chapter">CURRENT CHAPTER</p>
                <p className="chapter--number">Chapter 9</p>
                <button className="update--btn" type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
  return (<h2>No books here. Add a new book</h2>);
};

export default BookItem;
