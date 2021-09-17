import React from 'react';
import './CreateTodo.css';

function CreateTodo() {
	const agregarTodo = (event) => {
		if (event.charCode === 13) {
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
