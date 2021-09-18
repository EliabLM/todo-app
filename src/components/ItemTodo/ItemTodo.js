import React from 'react';
import IconCheck from './icon-check.svg';
import IconCross from './icon-cross.svg';
import './ItemTodo.css';
import '../CreateTodo/CreateTodo.css';

function ItemTodo({ todo, eliminarTodo }) {
	return (
		<li className="itemTodo">
			<div className="circulo">
				<img className="checkIcon" src={IconCheck} alt="Check icon" />
			</div>
			<p className="todoText">{todo.text}</p>
			<img
				onClick={() => eliminarTodo(todo.text)}
				className="crossIcon"
				src={IconCross}
				alt="Cross Icon"
			/>
		</li>
	);
}

export { ItemTodo };
