import React from 'react';
import './CreateTodo.css';

function CreateTodo() {
	// Funcion que agrega los todo a la lista
	const agregarTodo = (event) => {
		if (event.charCode === 13) {
			// probando el evento onKeyPress
			console.log(`Agregar el todo: ${event.target.value}`);
		}
	};

	return (
		<div className="createTodo">
			<div className="circulo"></div>
			<input
				className="input"
				placeholder="Create a new todo..."
				onKeyPress={agregarTodo}
			></input>
		</div>
	);
}

export { CreateTodo };
