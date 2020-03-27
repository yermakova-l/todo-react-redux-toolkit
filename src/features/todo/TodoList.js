import React from 'react'
import {useSelector} from 'react-redux'

import Todo from './Todo'


const TodoList = () => {
    const todos = useSelector(state => state.todos)
    
    return (
        <div>
            {
                todos.map(todo => (
                    <Todo key={todo.id} {...todo} />
                ))
            }
            
        </div>
    )
}

export default TodoList
