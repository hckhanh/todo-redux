import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let currentId = 0;

let AddTodo = ({ dispatch }) => {
  let inputText;
  return (
    <div>
      <input type="text" ref={input => inputText = input} />
      <input type="button" value="Add" onClick={e => {
        dispatch(addTodo(currentId++, inputText.value));
        inputText.value = '';
      } } />
    </div>
  );
}

AddTodo = connect()(AddTodo);

export default AddTodo;
