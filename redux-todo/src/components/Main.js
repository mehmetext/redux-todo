import Todo from "./Todo";
import { useTodos } from "../store/todos";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Main() {
	const { todos, status, loading, error } = useTodos();
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		switch (status) {
			case "completed":
				setFiltered(todos.filter((todo) => todo.completed));
				break;
			case "active":
				setFiltered(todos.filter((todo) => !todo.completed));
				break;
			default:
				setFiltered(todos);
				break;
		}
	}, [status, todos]);

	if (loading) return <Loading message="loading..." />;

	if (error) return <Loading message={error} />;

	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all">Mark all as complete</label>

			<ul className="todo-list">
				{filtered.length > 0 ? (
					filtered.map((todo) => <Todo key={todo.id} todo={todo} />)
				) : (
					<div className="no-todos">no todos</div>
				)}
			</ul>
		</section>
	);
}
