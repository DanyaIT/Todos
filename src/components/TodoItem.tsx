import React, {FC} from 'react'
import { TypeTodo } from '../types';

interface TodoItemProps extends TypeTodo {
    toggleTodo:(id:number)=>void
    removeTodo:(id:number)=>void
}

const TodoItem:FC<TodoItemProps> = (props) => {

    const {id, title, completed,toggleTodo,removeTodo} = props

  return (
    <div className='todo__item'>
        <div className='todo__item-left'>
        <input className= 'todo__item-checkbox' type='checkbox' checked  = {completed} onChange = {()=>toggleTodo(id)}/>
        <h3 className={completed === false? 'todo__item-text' : 'todo__item-text--active'}>{title}</h3>
        </div>
        <div>
        <button
        className='todo__item-button'
        onClick={()=>removeTodo(id)}
        >Delete</button>
        </div>
    
    </div>
  )
}

export default TodoItem