import React from 'react';
import { ItemTodo } from '../ItemTodo/ItemTodo';
import { CounterTodo } from '../CounterTodo/CounterTodo';
import './ListTodo.css';

function ListTodo({
	mostrarTodos,
	totalTodos,
	completedTodos,
	eliminarTodo,
	marcarTodo,
	eliminarTodoCompletados,
}) {
	return (
		<section className="list">
			<ul>
				{mostrarTodos.map((todo) => (
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
