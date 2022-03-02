import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({
    title: '',
    author: '',
    category: '',
  });

  const changeHandler = (e) => {
    setBookInfo({
      ...bookInfo,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: bookInfo.title,
      author: bookInfo.author,
      category: bookInfo.category,
    };

    dispatch(addBook(newBook));
    setBookInfo({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <>
      <div className="form--container">
        <h2 className="addnew--heading">ADD NEW BOOK</h2>
        <form className="book--form" onSubmit={submitHandler}>
          <input
            className="input--title"
            type="text"
            name="title"
            value={bookInfo.title}
            placeholder="Book Title"
            onChange={changeHandler}
            required
          />
          <input
            className="input--author"
            type="text"
            name="author"
            value={bookInfo.author}
            placeholder="Author"
            onChange={changeHandler}
            required
          />
          <select
            name="category"
            onChange={changeHandler}
            value={bookInfo.category}
          >
            <option value="" hidden>Category</option>
            <option value="Business">Business</option>
            <option name="Programming">Programming</option>
            <option value="Motivation">Motivation</option>
            <option value="Romance">Romance</option>
            <option value="Biographies">Biographies</option>
          </select>
          <input className="add--btn" type="submit" value="Add Book" />
        </form>
      </div>
    </>
  );
};

export default BookForm;
