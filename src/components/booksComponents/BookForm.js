import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({
    title: '',
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
      item_id: uuidv4(),
      title: bookInfo.title,
      category: bookInfo.category,
    };

    dispatch(addBook(newBook));
    setBookInfo({
      title: '',
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
          <select
            name="category"
            onChange={changeHandler}
            value={bookInfo.category}
          >
            <option value="" hidden>Category</option>
            <option value="Business">Business</option>
            <option name="Programming">Programming</option>
            <option value="Motivation">Motivation</option>
            <option value="Biographies">Biographies</option>
          </select>
          <input className="add--btn" type="submit" value="Add Book" />
        </form>
      </div>
    </>
  );
};

export default BookForm;
