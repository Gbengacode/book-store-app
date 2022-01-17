/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';

const Books = ({ books }) => (
  <>
    <h2>Book List</h2>
    <ul>
      {books.map((book) => (
        <Book
          key={book.id}
          author={book.author}
          title={book.title}
          category={book.category}
        />
      ))}
    </ul>

  </>
);
export default Books;
