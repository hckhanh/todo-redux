import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { toggleTodo, clearAllTodo, setFilterTodo, TodoFilter } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onClearAllTodo: () => dispatch(clearAllTodo()),
    onShowDoneTodo: () => dispatch(setFilterTodo(TodoFilter.SHOW_DONE_TODO)),
    onShowUndoneTodo: () => dispatch(setFilterTodo(TodoFilter.SHOW_UNDONE_TODO)),
    onShowAllTodo: () => dispatch(setFilterTodo(TodoFilter.SHOW_ALL_TODO)),
    onUndoTodo: () => dispatch(ActionCreators.undo())
  }
}

const Toolbar = ({ onClearAllTodo, onShowDoneTodo, onShowUndoneTodo, onShowAllTodo, onUndoTodo }) => {
  return (
    <div>
      <a href="#" style={{ paddingRight: '10px' }} onClick={onShowAllTodo}>Show all</a>
      <a href="#" style={{ paddingRight: '10px' }} onClick={onShowUndoneTodo}>Show undone</a>
      <a href="#" style={{ paddingRight: '10px' }} onClick={onShowDoneTodo}>Show done</a>
      <a href="#" style={{ paddingRight: '10px' }} onClick={onClearAllTodo}>Clear all</a>
      <a href="#" onClick={onUndoTodo}>Undo</a>
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(Toolbar)
