import React from 'react';
import './CounterTodo.css';

function CounterTodo() {
	return (
		<div className="CounterTodo">
			<p className="items-left">5 items left</p>
			<button className="clear-btn">Clear Completed</button>
		</div>
	);
}

export { CounterTodo };
