import React from 'react';
import { ItemTodo } from '../ItemTodo/ItemTodo';
import './ListTodo.css';

function ListTodo({ todos }) {
	return (
		<section>
			<ul className="list">
				{todos.map((todo) => (
					<ItemTodo todo={todo} key={todo.text} />
				))}
			</ul>
		</section>
	);
}

export { ListTodo };
