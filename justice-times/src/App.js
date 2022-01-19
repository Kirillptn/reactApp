import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Main } from "./component/Main";
import { createContext, useState } from 'react';

import './App.css';
export const MyContext = createContext({})

function App() {
	const [ currentUser, setCurrentUser ] = useState(JSON.parse(localStorage.getItem('user')))

	const providerValues = {
		currentUser,
		setCurrentUser
	}

	return (
		<MyContext.Provider value={providerValues}>
			<div className="App">
				<Header />
				<Main />
				<Footer />
			</div>
		</MyContext.Provider>
	);
}

export default App;
