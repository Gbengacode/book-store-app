import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookApi } from '../redux/books/books';

const Form = () => {
  const categories = ['Love', 'Horror', 'Action', 'Classic'];
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [titleError, setTitleError] = useState();
  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    setTitleError('');
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = false;
    if (title.trim() === '') {
      error = true;
      setTitleError('Please enter your title');
    }

    if (!error) {
      const formData = {
        item_id: uuidv4(), title, category,
      };
      dispatch(addBookApi(formData));
      setTitle('');
      setCategory('');
      setTitleError('');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            placeholder="Enter title of book"
            id="title"
            onChange={handleChangeTitle}
            value={title}
            required
          />
        </div>
        <span>{titleError}</span>
        <select onChange={handleChangeCategory} value={category}>
          {
            categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <input type="submit" value="Add Book" className="addBtn" onClick={handleSubmit} />

      </form>
    </div>
  );
};
export default Form;
