/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookApi } from '../redux/books/books';
import {
  CardDetail, CardImg, CardImgText, CircularContainer, CardText, CardChapter,
} from '../asset/CardStyles';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  item_id, title, category,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBookApi(item_id));
  };
  const percentage = 60;
  return (
    <>

      <CardDetail>
        <CardText>
          <p className="cat">{category}</p>
          <p className="title">{title}</p>
          <p className="author">Emmanuel Gbenga</p>
          <button type="button" className="btn">Comments</button>
          <button type="button" className=" btn" onClick={() => { handleDelete(item_id); }}>Remove</button>
          <button type="button" className="btn">Edit</button>
        </CardText>
        <CardImg>
          <CircularContainer>
            <CircularProgressbar value={percentage} />
          </CircularContainer>
          <CardImgText>
            <h2>{`${percentage}%`}</h2>
            <h3>Completed</h3>
          </CardImgText>
        </CardImg>
        <CardChapter>
          <h3>Current Chapter</h3>
          <h4>Chapter 17</h4>
          <button type="button" className="progress">Update Progress</button>
        </CardChapter>
      </CardDetail>
    </>
  );
};
Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
