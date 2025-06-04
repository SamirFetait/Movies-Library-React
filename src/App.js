import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav.js";
import cardsData from "./data/cards";
import Cards from "./Pages/Home.js";
import EditMovie from "./Pages/EditMovie";
import { useState } from "react";

function App() {
	const [cards, setCards] = useState(cardsData);

	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route
						path="/"
						element={<Cards cards={cards} setCards={setCards} />}
					/>
					<Route
						path="/EditMovie/:id"
						element={<EditMovie cards={cards} setCards={setCards} />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
