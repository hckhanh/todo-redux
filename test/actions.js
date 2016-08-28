import expect from 'expect'
import * as Actions from '../src/actions'

describe('Action', () => {
  it('ADD_TODO should be created', () => {
    expect(Actions.addTodo(0, 'This is todo'))
      .toEqual({
        type: Actions.ADD_TODO,
        id: 0,
        text: 'This is todo'
      })
  })

  it('TOGGLE_TODO should be created', () => {
    expect(Actions.toggleTodo(1))
      .toEqual({
        type: Actions.TOGGLE_TODO,
        id: 1
      })
  })

  it('CLEAR_ALL_TODO should be created', () => {
    expect(Actions.clearAllTodo())
      .toEqual({ type: Actions.CLEAR_ALL_TODO })
  })

  it('UNDO_ACTION should be created', () => {
    expect(Actions.undoAction())
      .toEqual({ type: Actions.UNDO_ACTION })
  })

  it('SET_TODO_FILTER should be created', () => {
    expect(Actions.setFilterTodo(Actions.TodoFilter.SHOW_ALL_TODO))
      .toEqual({
        type: Actions.SET_TODO_FILTER,
        todoFilter: Actions.TodoFilter.SHOW_ALL_TODO
      })
  })

  it('SELECT_TODO should be created', () => {
    expect(Actions.selectTodo(2))
      .toEqual({
        type: Actions.SELECT_TODO,
        id: 2
      })
  })

  it('UNSELECT_TODO should be created', () => {
    expect(Actions.unselectTodo(3))
      .toEqual({
        type: Actions.UNSELECT_TODO,
        id: 3
      })
  })

  it('EDIT_TODO should be created', () => {
    expect(Actions.editTodo(4, 'This is todo'))
      .toEqual({
        type: Actions.EDIT_TODO,
        id: 4,
        text: 'This is todo'
      })
  })
})
