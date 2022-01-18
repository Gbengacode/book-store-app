import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../components/Form';
import Book from '../components/Book';
import { fetchBookApi } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);
  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        {books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            item_id={book.item_id}
            category={book.category}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BookList;
