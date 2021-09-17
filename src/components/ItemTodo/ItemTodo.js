import React from 'react';
import { IconCheck } from './IconCheck';
import { IconCross } from './IconCross';
import './ItemTodo.css';
import '../CreateTodo/CreateTodo.css';

function ItemTodo({ todo }) {
	const probar = () => {
		console.log('probando');
	};

	return (
		<li className="itemTodo">
			<div className="circulo border border-gradient">
				<IconCheck className="checkIcon" alt="Check icon" />
			</div>
			<p className="todoText">{todo.text}</p>
			<IconCross onClick={probar} className="crossIcon crossIconShow" />
		</li>
	);
}

export { ItemTodo };
