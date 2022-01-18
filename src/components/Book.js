/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

const Book = ({
  item_id, title, category,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBookApi(item_id));
  };
  return (
    <>

      <li className="list-book">
        <p>{title}</p>
        <p>{category}</p>
        <button type="button" className="delBtn" onClick={() => { handleDelete(item_id); }}>Remove</button>
      </li>
    </>
  );
};
Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
