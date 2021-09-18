import React from 'react';
import './CreateTodo.css';

function CreateTodo({ agregarTodo }) {
	// Funcion para agregar todos con la tecla enter
	const agregarTodoKeyPress = (event) => {
		if (event.charCode === 13 && event.target.value !== '') {
			agregarTodo(event.target.value);
			event.target.value = '';
		}
	};

	return (
		<div className="createTodo">
			<div className="circulo"></div>
			<input
				className="input"
				placeholder="Create a new todo..."
				onKeyPress={agregarTodoKeyPress}
			></input>
		</div>
	);
}

export { CreateTodo };
