import { combineReducers } from 'redux';
import * as Actions from './actions';

/**
 * default state of the app
 */
const initialState = {
  todos: []
}

/**
 * reducer of todos state
 */
function todos(state = [], action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    case Actions.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { done: !todo.done });
        }

        return todo;
      })
    case Actions.CLEAR_ALL_TODO:
      return [];
    default: // include CLEAR_ALL_TODO
      return state;
  }
}

/**
 * reducer of TodoApp
 */
const todoApp = combineReducers({ todos });

export default todoApp;
