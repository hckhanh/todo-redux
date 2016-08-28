import React from 'react'

import AddTodo from '../containers/add-todo'
import VisibleTodoList from '../containers/visible-todo-list'
import Toolbar from '../containers/toolbar'

const App = () => {
  return (
    <div>
      <AddTodo />
      <Toolbar />
      <VisibleTodoList />
    </div>
  )
}

export default App
