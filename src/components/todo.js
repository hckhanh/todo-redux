import React, { PropTypes } from 'react'

const getTodoComponent = ({ text, done, selected, onSelectTodo, onEditTodo, onUnselectTodo }) => {
  let todoInput
  let saveButtonFocus

  if (!selected) {
    return (
      <span
        style={{ textDecoration: done ? 'line-through' : 'none' }}
        onClick={onSelectTodo}>
        {text}
      </span>
    )
  }

  return (
    <span>
      <input
        type="text"
        defaultValue={text}
        ref={e => {
          if (e) {
            e.select()
            todoInput = e
          }
        } }
        onBlur={() => {
          if (!saveButtonFocus) {
            onUnselectTodo()
          }
        } }
        />
      <input type="button"
        value="Save"
        onClick={() => {
          if (todoInput.value) {
            onEditTodo(todoInput.value)
            onUnselectTodo()
          }
        } }
        onMouseOver={() => saveButtonFocus = true }
        onMouseOut={() => {
          saveButtonFocus = false
          todoInput.focus()
        } } />
    </span>
  )
}

const Todo = (props) => {
  return (
    <li>
      <input type="checkbox"
        checked={props.done}
        onChange={props.onToggleTodo} />
      { getTodoComponent(props) }
    </li>
  )
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
}

export default Todo
