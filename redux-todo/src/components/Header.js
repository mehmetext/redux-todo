import { useState } from "react";
import { addTodoAsyncDispatch } from "../store/storeDispatch";

export default function Header() {
	const [todo, setTodo] = useState("");

	return (
		<header className="header">
			<h1>todos</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (todo !== "") {
						setTodo("");
						addTodoAsyncDispatch(todo);
					}
				}}
			>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
					onChange={(e) => setTodo(e.target.value)}
					value={todo}
					autoFocus
				/>
			</form>
		</header>
	);
}
