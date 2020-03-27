import React from 'react'
import TodoList from './features/todo/TodoList'
import NewTodo from './features/todo/NewTodo'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <NewTodo />
      <TodoList />
    </div>
  )
}

export default App

