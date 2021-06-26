import React, { useState } from 'react'
import { useSetRecoilState} from 'recoil'
import { todoListState } from '../atom'
import { getId } from '../lets'



const ItemCreator = () => {
        const [text,setText]= useState('')
        const setNewTodo = useSetRecoilState(todoListState)
        const onChangeText = (event) =>{
        setText(event.target.value);
        }

    const onClick = () => {
            setNewTodo(allTodoList=> {
            return [...allTodoList,
            {
                id: getId(),
                text,
                isCompleted: false
            }]}
        )
        setText('')
        }  
        return(
            <div>
                <input value={text} onChange={onChangeText}/>
                <button onClick={onClick}>Agregar</button>
            </div>
        )
}

export default ItemCreator