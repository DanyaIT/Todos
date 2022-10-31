import React, { FC, useState, useRef, useEffect } from 'react'
import '../styles/App.css'
import { TypeTodo } from '../types'
import TodoList from './TodoList';

const App: FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<TypeTodo[]>([{ id: 1, title: 'React', completed: false }, { id: 2, title: 'Gym', completed: false }, { id: 3, title: 'Redux', completed: false }])

    const inputRef = useRef<HTMLInputElement>(null)

    const addTodos = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                completed: false
            }])
            setValue('')
        }

    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter((todo) => todo.id !== id))

    }


    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) {
                return todo
            }
            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }


    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <div className='App'>
            <div className='todo'>
                <form className='todo__form'>
                    <input className='todo__form-input'
                        type='text' value={value}
                        placeholder='Add Todo'
                        onChange={(e) => setValue(e.target.value)}
                        ref={inputRef}
                    />
                    <button
                        className='todo__form-button'
                        onClick={addTodos}
                    >Add
                    </button>
                </form>
                <TodoList
                    items={todos}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                />
            </div>
        </div>
    )
}

export default App