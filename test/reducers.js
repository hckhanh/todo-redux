import expect from 'expect'
import * as Actions from '../src/actions'
import todos from '../src/reducers/todos'

const TODOS_DATA = [
  {
    id: 0,
    text: 'This is the first todo',
    done: false,
    selected: false
  },
  {
    id: 1,
    text: 'This is the second todo',
    done: true,
    selected: false
  },
  {
    id: 2,
    text: 'This is the third todo',
    done: false,
    selected: false
  },
  {
    id: 3,
    text: 'This is the fouth todo',
    done: true,
    selected: false
  }
]

describe('Reducer', () => {
  describe('todos', () => {
    it('should add new todo to todo state tree', () => {
      const action = {
        type: Actions.ADD_TODO,
        id: 4,
        text: 'This is the fifth todo'
      }

      expect(todos(TODOS_DATA, action))
        .toEqual([
          {
            id: 0,
            text: 'This is the first todo',
            done: false,
            selected: false
          },
          {
            id: 1,
            text: 'This is the second todo',
            done: true,
            selected: false
          },
          {
            id: 2,
            text: 'This is the third todo',
            done: false,
            selected: false
          },
          {
            id: 3,
            text: 'This is the fouth todo',
            done: true,
            selected: false
          },
          {
            id: 4,
            text: 'This is the fifth todo',
            done: false,
            selected: false
          }
        ])
    })

    it('should add new todo to todo state tree', () => {
      const action = {
        type: Actions.ADD_TODO,
        id: 4,
        text: 'This is the fifth todo'
      }

      expect(todos(TODOS_DATA, action))
        .toEqual([
          {
            id: 0,
            text: 'This is the first todo',
            done: false,
            selected: false
          },
          {
            id: 1,
            text: 'This is the second todo',
            done: true,
            selected: false
          },
          {
            id: 2,
            text: 'This is the third todo',
            done: false,
            selected: false
          },
          {
            id: 3,
            text: 'This is the fouth todo',
            done: true,
            selected: false
          },
          {
            id: 4,
            text: 'This is the fifth todo',
            done: false,
            selected: false
          }
        ])
    })

    it('should toggle to mark todo to be done', () => {
      const action = {
        type: Actions.TOGGLE_TODO,
        id: 0
      }

      expect(todos(TODOS_DATA, action))
        .toEqual([
          {
            id: 0,
            text: 'This is the first todo',
            done: true,
            selected: false
          },
          {
            id: 1,
            text: 'This is the second todo',
            done: true,
            selected: false
          },
          {
            id: 2,
            text: 'This is the third todo',
            done: false,
            selected: false
          },
          {
            id: 3,
            text: 'This is the fouth todo',
            done: true,
            selected: false
          }
        ])
    })

    it('should toggle to mark todo to be undone', () => {
      const action = {
        type: Actions.TOGGLE_TODO,
        id: 1
      }

      expect(todos(TODOS_DATA, action))
        .toEqual([
          {
            id: 0,
            text: 'This is the first todo',
            done: false,
            selected: false
          },
          {
            id: 1,
            text: 'This is the second todo',
            done: false,
            selected: false
          },
          {
            id: 2,
            text: 'This is the third todo',
            done: false,
            selected: false
          },
          {
            id: 3,
            text: 'This is the fouth todo',
            done: true,
            selected: false
          }
        ])
    })

    it('should select a todo', () => {
      const action = {
        type: Actions.SELECT_TODO,
        id: 0
      }

      expect(todos(TODOS_DATA, action))
        .toEqual([
          {
            id: 0,
            text: 'This is the first todo',
            done: false,
            selected: true
          },
          {
            id: 1,
            text: 'This is the second todo',
            done: true,
            selected: false
          },
          {
            id: 2,
            text: 'This is the third todo',
            done: false,
            selected: false
          },
          {
            id: 3,
            text: 'This is the fouth todo',
            done: true,
            selected: false
          }
        ])
    })

    it('should unselect a todo', () => {
      const action = {
        type: Actions.UNSELECT_TODO,
        id: 0
      }

      const todosData = [
        {
          id: 0,
          text: 'This is the first todo',
          done: false,
          selected: true
        },
        {
          id: 1,
          text: 'This is the second todo',
          done: true,
          selected: false
        },
        {
          id: 2,
          text: 'This is the third todo',
          done: false,
          selected: false
        },
        {
          id: 3,
          text: 'This is the fouth todo',
          done: true,
          selected: false
        }
      ]

      expect(todos(todosData, action))
        .toEqual([
          {
            id: 0,
            text: 'This is the first todo',
            done: false,
            selected: false
          },
          {
            id: 1,
            text: 'This is the second todo',
            done: true,
            selected: false
          },
          {
            id: 2,
            text: 'This is the third todo',
            done: false,
            selected: false
          },
          {
            id: 3,
            text: 'This is the fouth todo',
            done: true,
            selected: false
          }
        ])
    })

    it('should edit a todo', () => {
      const action = {
        type: Actions.EDIT_TODO,
        id: 1,
        text: 'This todo is updated'
      }

      expect(todos(TODOS_DATA, action))
        .toEqual([
          {
            id: 0,
            text: 'This is the first todo',
            done: false,
            selected: false
          },
          {
            id: 1,
            text: 'This todo is updated',
            done: true,
            selected: false
          },
          {
            id: 2,
            text: 'This is the third todo',
            done: false,
            selected: false
          },
          {
            id: 3,
            text: 'This is the fouth todo',
            done: true,
            selected: false
          }
        ])
    })

    it('should edit a todo', () => {
      const action = { type: Actions.CLEAR_ALL_TODO }

      expect(todos(TODOS_DATA, action))
        .toEqual([])
    })
  })
})
