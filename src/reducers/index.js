import { combineReducers } from 'redux'
import todos from './todos'
import todoFilter from './todo-filter'

/**
 * reducer of TodoApp
 */
const todoApp = combineReducers({ todos, todoFilter })

export default todoApp
