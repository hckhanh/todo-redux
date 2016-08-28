import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, clearAllTodo, setFilterTodo, TodoFilter } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onClearAllTodo: () => dispatch(clearAllTodo()),
    onShowDoneTodo: () => dispatch(setFilterTodo(TodoFilter.SHOW_DONE_TODO)),
    onShowUndoneTodo: () => dispatch(setFilterTodo(TodoFilter.SHOW_UNDONE_TODO)),
    onShowAllTodo: () => dispatch(setFilterTodo(TodoFilter.SHOW_ALL_TODO))
  }
}

const Toolbar = ({ onClearAllTodo, onShowDoneTodo, onShowUndoneTodo, onShowAllTodo }) => {
  return (
    <div>
      <a href="#" style={{ paddingRight: '5px' }} onClick={onShowUndoneTodo}>Show undone</a>
      <a href="#" style={{ paddingRight: '5px' }} onClick={onShowDoneTodo}>Show done</a>
      <a href="#" style={{ paddingRight: '5px' }} onClick={onShowAllTodo}>Show all</a>
      <a href="#" onClick={onClearAllTodo}>Clear all</a>
    </div>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Toolbar);
