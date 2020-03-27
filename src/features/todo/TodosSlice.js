import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4 } from 'uuid'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        create: (state, action) => {
            state.push({
                id: uuidv4(),
                description: action.payload,
                isDone: false
                }
            )
        },
        remove: (state, action) => {
            const index = state.findIndex( todo => todo.id === action.payload )
            state.splice(index,1)
        },
        toggleIsDone: (state, action) => {
            const itemToToggle = state.find( todo => todo.id === action.payload)
            itemToToggle.isDone = !itemToToggle.isDone
        },
        edit: (state, action) => {
            const itemToEdit = state.find( todo => todo.id === action.payload.id)
            itemToEdit.description = action.payload.description
        }
    }
})

export const { create, remove, toggleIsDone, edit } = todosSlice.actions

export default todosSlice.reducer