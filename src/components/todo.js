import React, { PropTypes } from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selected: false }

    this.getTodoComponent = this.getTodoComponent.bind(this)
    this.onSelectTodo = this.onSelectTodo.bind(this)
    this.onUnselectTodo = this.onUnselectTodo.bind(this)
  }

  getTodoComponent() {
    let todoInput, saveButtonFocus
    let { text, done, onEditTodo } = this.props
    let { onSelectTodo, onUnselectTodo } = this

    if (!this.state.selected) {
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

  onSelectTodo() {
    this.setState({ selected: true })
  }

  onUnselectTodo() {
    this.setState({ selected: false })
  }

  render() {
    let { done, onToggleTodo } = this.props;
    return (
      <li>
        <input type="checkbox"
          checked={done}
          onChange={onToggleTodo} />
        { this.getTodoComponent() }
      </li>
    )
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
}
