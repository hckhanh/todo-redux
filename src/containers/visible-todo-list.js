import { connect } from 'react-redux';
import { toggleTodo, clearAllTodo, editTodo, selectTodo, unselectTodo, TodoFilter } from '../actions';
import TodoList from '../components/todo-list';

function getTodoByFilter(todos, filter) {
  switch (filter) {
    case TodoFilter.SHOW_ALL_TODO:
      return todos;
    case TodoFilter.SHOW_DONE_TODO:
      return todos.filter(todo => todo.done);
    case TodoFilter.SHOW_UNDONE_TODO:
      return todos.filter(todo => !todo.done);
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getTodoByFilter(state.todos, state.todoFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => dispatch(toggleTodo(id)),
    onEditTodo: (id, text) => dispatch(editTodo(id, text)),
    onSelectTodo: (id) => dispatch(selectTodo(id)),
    onUnselectTodo: (id) => dispatch(unselectTodo(id))
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
