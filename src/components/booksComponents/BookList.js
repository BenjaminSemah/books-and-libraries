import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const booksLibrary = [
    {
      id: 0,
      title: 'Echoes From The Past',
      author: 'Peggy Oppong',
    },
    {
      id: 1,
      title: 'Blood Invasion',
      author: 'Lawrence Darmani',
    },
  ];

  const bookElements = booksLibrary.map((book) => (
    <BookItem
      key={book.id}
      book={book}
    />
  ));

  return (
    <>
      {bookElements}
    </>
  );
};

export default BookList;
