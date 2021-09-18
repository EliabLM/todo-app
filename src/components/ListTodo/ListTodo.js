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
	eliminarTodoCompletados,
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
			<CounterTodo
				eliminarTodoCompletados={eliminarTodoCompletados}
				eliminarTodo={eliminarTodo}
				totalTodos={totalTodos}
				completedTodos={completedTodos}
			/>
		</section>
	);
}

export { ListTodo };
