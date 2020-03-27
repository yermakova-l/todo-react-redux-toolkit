import React, { useState } from 'react'
import {toggleIsDone, remove, edit} from './TodosSlice'
import { useDispatch } from 'react-redux'
import './todostyles/todo.scss' 

import {trashIcon, editIcon, checkIcon } from './todoIcons'

const Todo = (props) => {
    const [editingTodoId, setEditingTodoId] = useState(-1)
    const [editingNewValue, setEditingNewValue] = useState('')
    const dispatch = useDispatch()
    const handleToggleIsDone = (id) => {
        dispatch(toggleIsDone(id))
    }

    const handleDeleteTodo = (id) => {
        dispatch(remove(id))
    }

    const handleEditTodo = (id) => {
        setEditingTodoId(id)
        setEditingNewValue(props.description)

    }

    const handleUpdateTodo = (e) => {
        e.preventDefault()
        dispatch(edit({id: props.id, description:editingNewValue }))
        setEditingTodoId(-1)
        setEditingNewValue('')
    }
    
    return (
            <>
                {
                    editingTodoId === props.id? (
                        <div>
                            <form className='row' onSubmit={handleUpdateTodo}>
                                <input className='update-input' type="text" value={editingNewValue} onChange={(e) => setEditingNewValue(e.target.value)}/>
                                <button className='update-btn' type='submit'>{checkIcon}</button>
                            </form>
                        </div>
                    ) : (
                        <div className='row'>
                            <button className='done-btn' onClick={() => handleToggleIsDone(props.id)}>{checkIcon}</button>
                            <div className='todo-description' style={{textDecoration: props.isDone? 'line-through' : ''}}><p>{props.description}</p></div>    
                            <button className='edit-btn' onClick={() => handleEditTodo(props.id)}>{editIcon}</button>
                            <button className='delete-btn' onClick={() => handleDeleteTodo(props.id)}>{trashIcon}</button>
                        </div>
                    )
                }
            </>
        )
}

export default Todo
