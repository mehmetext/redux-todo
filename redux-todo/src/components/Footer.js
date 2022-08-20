import { useTodos } from "../store/todos";
import {
	deleteCompletedsDispatch,
	setStatusDispatch,
} from "../store/storeDispatch";

export default function Footer() {
	const { todos, status } = useTodos();

	const activeCount = todos.filter((todo) => !todo.completed).length;

	const completedCount = todos.filter((todo) => todo.completed).length;

	return (
		<footer className="footer">
			<span className="todo-count">
				{activeCount > 0 ? (
					<>
						<strong>{activeCount}</strong> items left
					</>
				) : todos.length > 0 ? (
					<>all done</>
				) : (
					<></>
				)}
			</span>

			<ul className="filters">
				<li>
					<a
						onClick={(e) => {
							e.preventDefault();
							setStatusDispatch("all");
						}}
						href="#/"
						className={status === "all" ? "selected" : ""}
					>
						All
					</a>
				</li>
				<li>
					<a
						onClick={(e) => {
							e.preventDefault();
							setStatusDispatch("active");
						}}
						href="#/"
						className={status === "active" ? "selected" : ""}
					>
						Active
					</a>
				</li>
				<li>
					<a
						onClick={(e) => {
							e.preventDefault();
							setStatusDispatch("completed");
						}}
						className={status === "completed" ? "selected" : ""}
						href="#/"
					>
						Completed
					</a>
				</li>
			</ul>

			<button
				onClick={(e) => {
					e.preventDefault();
					deleteCompletedsDispatch();
				}}
				className={
					"clear-completed" + (completedCount < 1 ? " hidden" : "")
				}
			>
				Clear completed
			</button>
		</footer>
	);
}
