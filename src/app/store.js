import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/TodosSlice'

export default configureStore({
  reducer: {
    todos: todoReducer
  }
})
