import React from 'react';
import './FilterTodo.css';

function FilterTodo({ setFiltrarTodos }) {
	// Filtrar estilo de botones
	const filtrarBtnsEstilos = (event) => {
		// Estilo
		const btns = document.querySelectorAll('.filter-btn');
		btns.forEach((btn) => {
			btn.classList.remove('filter-btn-active');
			if (event.target.innerHTML === btn.innerHTML) {
				btn.classList.add('filter-btn-active');
			}
		});

		// Funcionalidad
		const target = event.target.classList;

		if (target.contains('all-btn')) {
			target.add('filter-btn-active');
			setFiltrarTodos('all');
		}

		if (target.contains('active-btn')) {
			target.add('filter-btn-active');
			setFiltrarTodos('active');
		}

		if (target.contains('completed-btn')) {
			target.add('filter-btn-active');
			setFiltrarTodos('completed');
		}
	};

	return (
		<div className="FilterTodo">
			<button className="filter-btn all-btn" onClick={filtrarBtnsEstilos}>
				All
			</button>
			<button className="filter-btn active-btn" onClick={filtrarBtnsEstilos}>
				Active
			</button>
			<button className="filter-btn completed-btn" onClick={filtrarBtnsEstilos}>
				Completed
			</button>
		</div>
	);
}

export { FilterTodo };
