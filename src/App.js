import React, { Fragment } from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/Footer/Footer';
import { CreateTodo } from './components/CreateTodo/CreateTodo';
import bgDesktopDark from './images/bg-desktop-dark.jpg';
import './App.css';

function App() {
	return (
		<Fragment>
			<img className="img-background" src={bgDesktopDark} alt="Background" />
			<Header />
			<main className="main">
				<CreateTodo />
				Aqui va toda la lista de Todos
			</main>
			<p className="drag-and-drop">Drag and drop to reorder list</p>
			<Footer />
		</Fragment>
	);
}

export default App;
