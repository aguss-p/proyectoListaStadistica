import { React } from 'react'
import { useRecoilState} from 'recoil'
import { todoFilterState} from '../atom'

const TodoFilter =() =>{
    const [filterState, setFilterState]= useRecoilState(todoFilterState)
  
    const onSelectedItem = (event) =>{
      const {value} = event.target
      setFilterState(value)
    }
    return(
      <div>
        Filtro:
        <select value={filterState} onChange={onSelectedItem}>
          <option value="all">Todos</option>
          <option value="done">Realizados</option>
          <option value="notDone">No Realizados</option>
        </select>
      </div>
    )
  }

export default TodoFilter