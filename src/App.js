import React, { Fragment } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CreateTodo } from './components/CreateTodo/CreateTodo';
import { ListTodo } from './components/ListTodo/ListTodo';
import { FilterTodo } from './components/FilterTodo/FilterTodo';
import bgDesktopDark from './images/bg-desktop-dark.jpg';
import './App.css';

// lista momentanea de todos
const todos = [
	{ text: 'Complete online JavaScript course', completed: true },
	{ text: 'Jog around the park 3x', completed: false },
	{ text: '10 minutres meditation', completed: false },
	{ text: 'Read for 1 hour', completed: false },
	{ text: 'Pick up groceries', completed: false },
	{ text: 'Complete Todo App on Frontend Mentor', completed: false },
];

function App() {
	return (
		<Fragment>
			<img className="img-background" src={bgDesktopDark} alt="Background" />
			<Header />
			<main className="main">
				<CreateTodo />
				<ListTodo todos={todos} />
				<FilterTodo />
			</main>
			<p className="drag-and-drop">Drag and drop to reorder list</p>
			<Footer />
		</Fragment>
	);
}

export default App;
