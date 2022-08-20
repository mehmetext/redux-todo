import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect } from "react";

import "./style.css";
import { getTodosAsyncDispatch } from "./store/storeDispatch";

function App() {
	useEffect(() => {
		(async () => {
			getTodosAsyncDispatch();
		})();
	}, []);

	return (
		<section className="todoapp">
			<Header />
			<Main />
			<Footer />
		</section>
	);
}

export default App;
