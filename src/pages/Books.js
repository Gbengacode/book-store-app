import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../components/Form';
import Book from '../components/Book';
import { fetchBookApi } from '../redux/books/books';
import { CardsContainer } from '../asset/CardStyles';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);
  return (
    <div>

      <CardsContainer>
        {books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            item_id={book.item_id}
            category={book.category}
          />
        ))}
      </CardsContainer>
      <Form />
    </div>
  );
};

export default BookList;
