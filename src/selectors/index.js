import { selector } from 'recoil'
import { todoFilterState, todoListState } from '../atom'
import axios from 'axios'
import { urlData } from '../urls'



export const todoFilterSelector = selector({
    key: 'todoFilterSelector',
    get: ({ get }) => {
      const list = get(todoListState);
      const filter = get(todoFilterState);
      switch (filter) {
        case 'done':
          return list.filter(item => item.isCompleted)
        case 'notDone':
          return list.filter(item => !item.isCompleted)
        default:
          return list;
      }
    }
  })
  
export const todoStatsSelector = selector({
    key: 'todoStatsSelector',
    get: ({ get }) => {
      const list = get(todoListState);
      const toDo = list.filter(item => !item.isCompleted).length;
      const notToDo = list.filter(item => item.isCompleted).length;
      const completedPercentage = list.length=== 0 ? 0 : notToDo / list.length
      const data = {
        total: list.length,
        toDo,
        notToDo ,
        completedPercentage
      }
      return data;
    }
  })
  
export const userDataSelector = selector({
    key: 'userDataSelector',
    get: async() =>{
        const response = await axios.get(urlData)
  
        return response.data
    }
  })
  
  