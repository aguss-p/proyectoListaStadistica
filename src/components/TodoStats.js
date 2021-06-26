import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoStatsSelector } from '../selectors'


const TodoStats = () => {
    const {total, toDo, notToDo, completedPercentage } = useRecoilValue(todoStatsSelector)
  
    return(
      <div>
        <span>Tareas totales: {total}</span><br/>
        <span>Tareas por hacer: {toDo}</span><br/>
        <span>Tareas realizadas: {notToDo}</span><br/>
        <span>Progreso: %{completedPercentage* 100}</span><br/>
      </div>
    )
  }

export default TodoStats