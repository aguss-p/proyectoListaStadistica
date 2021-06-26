import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoFilterSelector } from '../selectors'
import TodoItem from './TodoItem'

const TodoList = ()=> {
    const todo= useRecoilValue(todoFilterSelector)
    return(
        <div>
        {
            todo.map(item=> <TodoItem key={item.id} {...item}/>)
        }
        </div>
    )
  }

export default TodoList