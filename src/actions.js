/**
 * action types
 */

export const ADD_TODO = 'ADD_TODO';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const CLEAR_ALL_TODO = 'CLEAR_ALL_TODO';

export const UNDO_ACTION = 'UNDO_ACTION';

/**
 * action creators
 */

export function addTodo(id, text) {
  return { type: ADD_TODO, id, text };
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}

export function clearAllTodo() {
  return { type: CLEAR_ALL_TODO };
}

export function undoAction() {
  return { type: UNDO_ACTION };
}
