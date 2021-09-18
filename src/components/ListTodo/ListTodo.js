import React from 'react';
import { ItemTodo } from '../ItemTodo/ItemTodo';
import { CounterTodo } from '../CounterTodo/CounterTodo';
import './ListTodo.css';

function ListTodo({
	todos,
	totalTodos,
	completedTodos,
	eliminarTodo,
	marcarTodo,
}) {
	return (
		<section className="list">
			<ul>
				{todos.map((todo) => (
					<ItemTodo
						marcarTodo={marcarTodo}
						eliminarTodo={eliminarTodo}
						todo={todo}
						key={todo.text}
					/>
				))}
			</ul>
			<CounterTodo totalTodos={totalTodos} completedTodos={completedTodos} />
		</section>
	);
}

export { ListTodo };
