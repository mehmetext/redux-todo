import {
	toggleTodoAsyncDispatch,
	deleteTodoAsyncDispatch,
} from "../store/storeDispatch";

export default function Todo({ todo }) {
	const onChangeCheckbox = (e) => {
		toggleTodoAsyncDispatch({ id: todo.id, data: e.target.checked });
	};

	const handleDelete = () => {
		deleteTodoAsyncDispatch(todo.id);
	};

	return (
		<li className={todo.completed ? "completed" : ""}>
			<div className="view">
				<input
					className="toggle"
					type="checkbox"
					defaultChecked={todo.completed}
					onChange={onChangeCheckbox}
				/>
				<label>{todo.title}</label>
				<button onClick={handleDelete} className="destroy"></button>
			</div>
		</li>
	);
}
