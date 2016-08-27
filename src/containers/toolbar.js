import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, clearAllTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onClearAllTodo: () => dispatch(clearAllTodo())
  }
}

const Toolbar = ({ onClearAllTodo }) => {
  return (
    <a href="#" onClick={onClearAllTodo}>Clear all</a>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Toolbar);
