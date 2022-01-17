import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from '../components/Form';
import Books from '../components/Books';

const BookList = () => {
  const books = [
    {
      id: uuidv4(),
      title: 'Bedtime',
      author: 'Emmanuel Sam',
      category: 'Dance',
    },
  ];

  return (
    <div>

      <Books books={books} />
      <Form />
    </div>
  );
};

export default BookList;
