import React from 'react';

const BookForm = () => (
  <>
    <div className="form--container">
      <h2 className="addnew--heading">ADD NEW BOOK</h2>
      <form className="book--form">
        <input className="input--title" type="text" placeholder="Book Title" />
        <input className="input--category" type="text" placeholder="Category" />
        <button className="add--btn" type="button">ADD BOOK</button>
      </form>
    </div>
  </>
);

export default BookForm;
