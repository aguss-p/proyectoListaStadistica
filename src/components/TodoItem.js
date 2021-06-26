import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../atom'


const changeItem = (id, todoList, changedItem) => {

        const index = todoList.findIndex(item=> item.id === id)
    
        return [...todoList.slice(0,index),changedItem,...todoList.slice(index+1,todoList.lenght)]
    }
    
    const deleteItem = (id, todoList) => {
        const index = todoList.findIndex(item=> item.id === id)
    
        return [...todoList.slice(0,index), ...todoList.slice(index+1,todoList.lenght)]
    }

    const TodoItem = ({id,text, isCompleted}) => {
        const [todoList, setTodoList]= useRecoilState(todoListState);
    
        const onChangeTodoItem = (event) => {
            const textValue = event.target.value
            const changedItem={
            id,
            text: textValue,
            isCompleted
            }
            setTodoList(changeItem(id, todoList, changedItem))
        }
    
        const onToggleCompleted = (event) =>{
        const textValue = event.target.value
        const changedItem={
            id,
            text: textValue,
            isCompleted: !isCompleted
        }
        setTodoList(changeItem(id, todoList, changedItem))
    }
    const onClickDelete = () => {
        setTodoList(deleteItem(id, todoList))
    }
        
    
        return(
        <div>
            <input value={text} onChange={onChangeTodoItem}/>
            <input type="checkbox" checked={isCompleted} onChange={onToggleCompleted}/>
            <button onClick={onClickDelete}> x</button>
        </div>
        )
    }

export default TodoItem