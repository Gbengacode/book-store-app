import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  key, author, title, category,
}) => (
  <li key={key}>
    <p>{title}</p>
    <p>{author}</p>
    <p>{category}</p>
    <button type="button">Remove</button>
  </li>
);
Book.propTypes = {
  key: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
