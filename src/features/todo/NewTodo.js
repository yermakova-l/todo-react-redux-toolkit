import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../todo/TodosSlice'

import { plusIcon } from './todoIcons'

const NewTodo = () => {
    const [newTodo, setNewTodo] = useState('')

    const dispatch = useDispatch()
    

    const handleCreateNewTodo = (e) => {
        e.preventDefault()
        dispatch(create(newTodo))
        setNewTodo('')
    }
    return (
        <div className='create-new-todo'>
            <form className='row' onSubmit={handleCreateNewTodo}>
                <input className='' type="text" 
                    value={newTodo} 
                    onChange={(e) => setNewTodo(e.target.value) }/>
                <button type='submit'>{plusIcon}</button>
            </form>
        </div>
    )
}

export default NewTodo
