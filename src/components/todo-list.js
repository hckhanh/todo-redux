import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './todo';

let TodoList = ({ todos, onToggleTodo }) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <Todo
            key={todo.id}
            text={todo.text}
            done={todo.done}
            onToggleTodo={() => onToggleTodo(todo.id) } />
        ))
      }
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

export default TodoList;
