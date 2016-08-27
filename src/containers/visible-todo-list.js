import { connect } from 'react-redux';

import { toggleTodo } from '../actions';
import TodoList from '../components/todo-list';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => dispatch(toggleTodo(id))
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
