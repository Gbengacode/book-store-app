import React from 'react';

const Form = () => (

  <>
    <form>
      <input type="text" placeholder="Enter name of author" id="author" />
      <input type="text" placeholder="Enter name of title" id="title" />
      <select>
        <option value="">Select category</option>
        <option value="movie">Movie</option>
        <option value="movie">Dance</option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </>
);

export default Form;
