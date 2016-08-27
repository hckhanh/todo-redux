import React, { PropTypes } from 'react';

const Todo = ({text, done, onToggleTodo}) => {
  return (
    <li>
      <input type="checkbox" checked={done} onChange={onToggleTodo} /> {text}
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
}

export default Todo;
