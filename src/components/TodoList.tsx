import React, {FC, useEffect, useState} from 'react'
import TodoItem from './TodoItem'
import { TypeTodo } from '../types'

interface TodoListProps{
    items: TypeTodo []
    removeTodo: (id:number)=>void
    toggleTodo: (id:number)=>void
}

const TodoList:FC<TodoListProps> = (props) => {

  const {items, removeTodo,toggleTodo} = props
  const[filter, setFilter] = useState<TypeTodo[]>(items)

  useEffect(()=>{
    setFilter(items)
  },[items])

  const filteredTodo = (status:boolean | string) =>{
    if(status == 'All'){
      setFilter(items)
    } else {
      setFilter([...items].filter(item=> item.completed === status))
    }
  }
 useEffect(()=>{

 },[])

  return (
    <div className='todo__list'>
        {filter.map(todo => 
        <TodoItem 
        key={todo.id} 
        {...todo} 
        removeTodo = {removeTodo}
        toggleTodo = {toggleTodo}
        />)}
        <div className='todo__list-button'>
        <button onClick = {()=>filteredTodo(false)}>Active</button>
        <button onClick = {()=>filteredTodo(true)}>Completed</button>
        <button onClick = {()=>filteredTodo('All')}>All</button>
        </div>
    </div>
  )
}

export default TodoList