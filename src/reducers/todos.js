import undoable from 'redux-undo'
import * as Actions from '../actions'

/**
 * reducer of todo state
 */
function todo(state, action) {
  if (action.type === Actions.ADD_TODO) {
    return {
      id: action.id,
      text: action.text,
      done: false,
      selected: false
    }
  }

  if (state.id === action.id) {
    switch (action.type) {
      case Actions.TOGGLE_TODO:
        return Object.assign({}, state, { done: !state.done })
      case Actions.SELECT_TODO:
        return Object.assign({}, state, { selected: true })
      case Actions.UNSELECT_TODO:
        return Object.assign({}, state, { selected: false })
      case Actions.EDIT_TODO:
        return Object.assign({}, state, { text: action.text })
    }
  }

  return state
}

/**
 * reducer of todos state
 */
function todos(state = [], action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state,
        todo(null, action)
      ]
    case Actions.TOGGLE_TODO:
    case Actions.SELECT_TODO:
    case Actions.UNSELECT_TODO:
    case Actions.EDIT_TODO:
      return state.map(t => todo(t, action))
    case Actions.CLEAR_ALL_TODO:
      return []
    default: // include CLEAR_ALL_TODO
      return state
  }
}

const undoableTodos = undoable(todos);

export default undoableTodos;
