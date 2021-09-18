import React from 'react';
import './CounterTodo.css';

function CounterTodo({ completedTodos, totalTodos }) {
	return (
		<div className="CounterTodo">
			<p className="items-left">{totalTodos - completedTodos} items left</p>
			<button className="clear-btn">Clear Completed</button>
		</div>
	);
}

export { CounterTodo };
