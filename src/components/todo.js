import React, { PropTypes } from 'react';

const Todo = ({text, done, onToggleTodo}) => {
  return (
    <li>
      <input type="checkbox" checked={done} onChange={onToggleTodo} />
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{text}</span>
    </li>
  );
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
}

export default Todo;
