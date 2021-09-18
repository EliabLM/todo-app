import React from 'react';
import IconCheck from './icon-check.svg';
import IconCross from './icon-cross.svg';
import './ItemTodo.css';
import '../CreateTodo/CreateTodo.css';

function ItemTodo({ todo, eliminarTodo, marcarTodo }) {
	return (
		<li className="itemTodo">
			<div className={`circulo ${todo.completed && 'checkIcon-active'}`}>
				<img
					className={`checkIcon-hidden ${todo.completed && 'checkIcon'}`}
					src={IconCheck}
					alt="Check icon"
				/>
			</div>
			<p
				key={todo.text}
				onClick={() => marcarTodo(todo.text)}
				className={`todoText ${todo.completed && 'todoText-check'}`}
			>
				{todo.text}
			</p>
			<img
				onClick={() => eliminarTodo(todo.text)}
				className={`crossIcon-hidden ${todo.completed && 'crossIcon-active'}`}
				src={IconCross}
				alt="Cross Icon"
			/>
		</li>
	);
}

export { ItemTodo };
