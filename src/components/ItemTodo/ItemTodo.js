import React from 'react';
import IconCheck from './icon-check.svg';
import IconCross from './icon-cross.svg';
import './ItemTodo.css';
import '../CreateTodo/CreateTodo.css';

function ItemTodo({ todo }) {
	const probar = () => {
		console.log('probando');
	};

	return (
		<li className="itemTodo">
			<div className="circulo border border-gradient">
				<img className="checkIcon" src={IconCheck} alt="Check icon" />
			</div>
			<p className="todoText">{todo.text}</p>
			<img
				onClick={probar}
				className="crossIcon"
				src={IconCross}
				alt="Cross Icon"
			/>
		</li>
	);
}

export { ItemTodo };
