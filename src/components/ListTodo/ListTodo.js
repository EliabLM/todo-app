import React from 'react';
import { ItemTodo } from '../ItemTodo/ItemTodo';
import { CounterTodo } from '../CounterTodo/CounterTodo';
import './ListTodo.css';

function ListTodo({ todos }) {
	return (
		<section className="list">
			<ul>
				{todos.map((todo) => (
					<ItemTodo todo={todo} key={todo.text} />
				))}
			</ul>
			<CounterTodo />
		</section>
	);
}

export { ListTodo };
