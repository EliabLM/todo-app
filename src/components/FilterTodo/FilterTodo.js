import React from 'react';

function FilterTodo() {
	return (
		<div className="FilterTodo">
			<button className="filter-btn all-btn">All</button>
			<button className="filter-btn active-btn">Active</button>
			<button className="filter-btn completed-btn">Completed</button>
		</div>
	);
}

export { FilterTodo };
