import { SET_TODO_FILTER, TodoFilter } from '../actions'

/**
 * reducer for filter action of todos state
 */
export default function todoFilter(state = TodoFilter.SHOW_ALL_TODO, action) {
  switch (action.type) {
    case SET_TODO_FILTER:
      return action.todoFilter
    default:
      return state
  }
}
