import React, { Fragment, useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CreateTodo } from './components/CreateTodo/CreateTodo';
import { ListTodo } from './components/ListTodo/ListTodo';
import { FilterTodo } from './components/FilterTodo/FilterTodo';
import bgDesktopDark from './images/bg-desktop-dark.jpg';
import './App.css';

// lista momentanea de todos
// const todos = [
// 	{ text: 'Complete online JavaScript course', completed: true },
// 	{ text: 'Jog around the park 3x', completed: true },
// 	{ text: '10 minutes meditation', completed: true },
// 	{ text: 'Read for 1 hour', completed: false },
// 	{ text: 'Pick up groceries', completed: false },
// 	{ text: 'Complete Todo App on Frontend Mentor', completed: false },
// ];

// localStorage.setItem('todos', JSON.stringify(todos));

function App() {
	// Sacar los todos que esten en local storage
	let todosIniciales = JSON.parse(localStorage.getItem('todos'));
	if (!todosIniciales) {
		todosIniciales = [];
	}

	// Arreglo de todos con useState
	const [todos, guardarTodo] = useState(todosIniciales);

	// todos completados
	const completedTodos = todos.filter((todo) => todo.completed).length;
	const totalTodos = todos.length;

	// Funcion que elimina un todo por su texto
	const eliminarTodo = (text) => {
		const nuevosTodos = todos.filter((todo) => todo.text !== text);
		guardarTodo(nuevosTodos);
	};

	// Funcion que marca los todo como completados
	const marcarTodo = (text) => {
		let nuevosTodos = todos.filter((todo) => todo.text === text);
		if (nuevosTodos[0].completed) {
			nuevosTodos[0].completed = false;
		} else {
			nuevosTodos[0].completed = true;
		}

		nuevosTodos = [...todos];
		guardarTodo(nuevosTodos);
	};

	// useEffect que modifica los todos que estan en local storage cada vez que se elimina o agrega uno nuevo
	useEffect(() => {
		if (todosIniciales) {
			localStorage.setItem('todos', JSON.stringify(todos));
		} else {
			localStorage.setItem('todos', JSON.stringify([]));
		}
	}, [todos, todosIniciales]);

	return (
		<Fragment>
			<img className="img-background" src={bgDesktopDark} alt="Background" />
			<Header />
			<main className="main">
				<CreateTodo />
				<ListTodo
					completedTodos={completedTodos}
					totalTodos={totalTodos}
					todos={todos}
					marcarTodo={marcarTodo}
					eliminarTodo={eliminarTodo}
				/>
				<FilterTodo />
			</main>
			<p className="drag-and-drop">Drag and drop to reorder list</p>
			<Footer />
		</Fragment>
	);
}

export default App;
