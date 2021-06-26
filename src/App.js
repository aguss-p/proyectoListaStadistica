
import { RecoilRoot } from 'recoil'
import ItemCreator from './components/ItemCreator'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
import TodoStats from './components/TodoStats'
import UserData from './components/UserData'
import { Suspense} from 'react'

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <UserData/>
        <TodoFilter/>
        <TodoStats/>
        <ItemCreator/>
        <TodoList/>
      </Suspense>
    </RecoilRoot>
  )
}

// let idUnico = 0;


// const todoListState = atom({
//   key: 'todoListState',
//   default: []
// })

// const todoFilterState = atom({
//   key: 'todoFilterState',
//   default: "all"
// })

// const todoFilterSelector = selector({
//   key: 'todoFilterSelector',
//   get: ({ get }) => {
//     const list = get(todoListState);
//     const filter = get(todoFilterState);
//     switch (filter) {
//       case 'done':
//         return list.filter(item => item.isCompleted)
//       case 'notDone':
//         return list.filter(item => !item.isCompleted)
//       default:
//         return list;
//     }
//   }
// })

// const todoStatsSelector = selector({
//   key: 'todoStatsSelector',
//   get: ({ get }) => {
//     const list = get(todoListState);
//     const toDo = list.filter(item => !item.isCompleted);
//     const notToDo = list.filter(item => item.isCompleted);
//     const completedPercentage = list.length=== 0 ? 0 : notToDo / list.length
//     const data = {
//       total: list.length,
//       toDo,
//       notToDo ,
//       completedPercentage
//     }
//     return data;
//   }
// })

// const userDataSelector = selector({
//   key: 'userDataSelector',
//   get: async() =>{
//       const response = await axios.get("http://localhost:3003/users/1")

//       return response.data
//   }
// })









/*
const todos= [
  {id: 1, text: "Todo 1", isCompleted: false},
  {id: 2,text: "Todo 2", isCompleted: false},
  {id: 3,text: "Todo 3", isCompleted: true},
  {id: 4,text: "Todo 4", isCompleted: false},
]
*/
// function TodoList() {
//   const todo= useRecoilValue(todoListState)
//   return(
//   <div>
//     {
//       todo.map(item=> <TodoItem key={item.id} {...item}/>)
//     }
//   </div>)
// }
// function changeItem(id, todoList, changedItem){
//   const index = todoList.findIndex(item=> item.id === id)

//   return [...todoList.slice(0,index),changeItem,...todoList.slice(index+1,todoList.lenght)]
// }

// function deleteItem(id, todoList){
//   const index = todoList.findIndex(item=> item.id === id)

//   return [...todoList.slice(0,index), ...todoList.slice(index+1,todoList.lenght)]
// }


// function TodoItem({id,text, isCompleted}){
//   const [todoList, setTodoList]= useRecoilState(todoListState);

//   const onChangeTodoItem = (event) => {
//       const textValue = event.target.value
//       const changedItem={
//         id,
//         text: textValue,
//         isCompleted
//       }
//       setTodoList(changeItem(id, todoList, changedItem))
//   }

//   const onToggleCompleted = (event) =>{
//     const changedItem={
//       id,
//       text,
//       isCompleted: !isCompleted
//     }
//     setTodoList(changeItem(id, todoList, changedItem))
// }
// const onClickDelete = () => {
//   setTodoList(deleteItem(id, todoList))
// }
  

//   return(
//     <div>
//       <input value={text} onChange={onChangeTodoItem}/>
//       <input type="checkbox" checked={isCompleted} onChange={onToggleCompleted}/>
//       <button onClick={onClickDelete}> x</button>
//     </div>
//   )
//   }

// function TodoFilter(){
//   const [filterState, setFilterState]= useRecoilState(todoFilterState)

//   const onSelectedItem = (event) =>{
//     const {value} = event.target
//     setFilterState(value)
//   }
//   return(
//     <div>
//       Filtro:
//       <select value={filterState} onChange={onSelectedItem}>
//         <option value="all">Todos</option>
//         <option value="done">Realizados</option>
//         <option value="notDone">No Realizados</option>
//       </select>
//     </div>
//   )
// }

// function TodoStats(){
//   const {total, toDo, notToDo, completedPercentage } = useRecoilValue(todoStatsSelector)

//   return(
//     <div>
//       <span>Tareas totales: {total}</span><br/>
//       <span>Tareas por hacer: {toDo}</span><br/>
//       <span>Tareas realizadas: {notToDo}</span><br/>
//       <span>Progreso: %{completedPercentage* 100}</span><br/>
//     </div>
//   )
// }

// function UserData(){
//   const user = useRecoilValue(userDataSelector)
//   return(
//   <hi>
//     {user.name}
//   </hi>
//   )
// }
export default App;
