/**
 * action types
 */

export const ADD_TODO = 'ADD_TODO'

export const TOGGLE_TODO = 'TOGGLE_TODO'

export const CLEAR_ALL_TODO = 'CLEAR_ALL_TODO'

export const UNDO_ACTION = 'UNDO_ACTION'

export const SHOW_DONE_TODO = 'SHOW_DONE_TODO'

export const SET_TODO_FILTER = 'SET_TODO_FILTER'

export const SELECT_TODO = 'SELECT_TODO'

export const UNSELECT_TODO = 'UNSELECT_TODO'

export const EDIT_TODO = 'EDIT_TODO'

export const TodoFilter = {
  SHOW_ALL_TODO: 'SHOW_ALL_TODO',
  SHOW_DONE_TODO: 'SHOW_DONE_TODO',
  SHOW_UNDONE_TODO: 'SHOW_UNDONE_TODO'
}

/**
 * action creators
 */

export function addTodo(id, text) {
  return { type: ADD_TODO, id, text }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}

export function clearAllTodo() {
  return { type: CLEAR_ALL_TODO }
}

export function undoAction() {
  return { type: UNDO_ACTION }
}

export function setFilterTodo(todoFilter) {
  return { type: SET_TODO_FILTER, todoFilter }
}

export function selectTodo(id) {
  return { type: SELECT_TODO, id }
}

export function unselectTodo(id) {
  return { type: UNSELECT_TODO, id }
}

export function editTodo(id, text) {
  return { type: EDIT_TODO, id, text }
}
