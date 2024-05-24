import { useEffect, useState } from 'react'
import todosData from './../../assets/todos.json'
import { TodoItem } from './TodoItem'
import s from './TodoList.module.css'
import { nanoid } from 'nanoid'
import Modal from '../Modal/Modal'

export const TodoList = () => {
	const [todos, setTodos] = useState(() => {
        const savedTodos = window.localStorage.getItem('todos')
        if(savedTodos !== null){
            return JSON.parse(savedTodos)
        }
        return todosData 
    })


	const [title, setTitle] = useState('')
    const [isOpen, setIsOpen] = useState(false)

useEffect (()=>{
    window.localStorage.setItem('todos', JSON.stringify(todos))
},[todos])

	const handleDelete = id => {
		setTodos(prev => prev.filter(item => item.id !== id)) // [...]
	}
	const handleAddTodo = () => {
		const newTodo = {
			id: nanoid(),
			todo: title,
			completed: false,
		}
		setTodos(prev => [...prev, newTodo])
		setTitle('')
	}

	const handleRemoveSelected = () => {
		setTodos(prev => prev.filter(item => !item.completed))
	}

	const handleRemoveAll = () => {
		setTodos([])
	}

	const handleRenameTodo = id => {
		console.log(id)
		const newValue = prompt('Enter new value')
		console.log(newValue)
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, todo: newValue } : item)))
	}
	const handleToggleTodo = id => {
		console.log(id)
		// 1. Отримати айді
		// 2. Пробіжатись по массиву об'єктів
		// 3. Знайти об'єкт по айді
		// 4. Замінити значення completed на протележне
		// 5. Якщо елемент не знайдено повернути його незмінним
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))

		// setTodos(prev =>
		// 	prev.map(item => {
		// 		if (item.id === id) {
		// 			return { ...item, completed: !item.completed }
		// 		}
		// 		return item
		// 	})
		// )
	}

    const OpenModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

	return (
		<>
        <div  className={s.container}>
			<div className='flex'>
				<input value={title} onChange={e => setTitle(e.target.value)} className={s.input} />
				<button className='btn border' onClick={handleAddTodo}>
					Add
				</button>
			</div>
			<ul className={s.list}>
				{todos.map(item => (
					<TodoItem
						key={item.id}
						{...item}
						handleToggleTodo={handleToggleTodo}
						handleDelete={handleDelete}
						handleRenameTodo={handleRenameTodo}
					/>
				))}
			</ul>
			<div className='flex'>
				<button onClick={handleRemoveSelected}>Remove selected</button>
				<button onClick={handleRemoveAll}>Remove All</button>
                <button onClick={OpenModal}>Open Modal</button>
			</div>
                {isOpen && (
                    <Modal onClose={closeModal}>
                    <h1>Hello Hellooo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat explicabo odio laborum vitae suscipit animi, sunt ad vero! Quaerat obcaecati molestias eius quibusdam praesentium asperiores dolorem illo, impedit quasi voluptatibus.</p>
                    </Modal>               
                )}
            </div>
		</>
	)
}