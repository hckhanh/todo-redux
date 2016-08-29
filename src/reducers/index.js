import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import todos from './todos'
import todoFilter from './todo-filter'

/**
 * reducer of TodoApp
 */
const todoApp = combineReducers({
  todos: undoable(todos),
  todoFilter
})

export default todoApp
