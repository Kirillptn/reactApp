import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Main } from "./component/Main";
import { createContext, useEffect, useState } from 'react';

import './App.css';

export const MyContext = createContext({})

function App() {
	const [ currentUser, setCurrentUser ] = useState(JSON.parse(localStorage.getItem('user')))

	const [ articles, setArticles ] = useState([
		{
			tag: 'Typography 1 article',
			title: '1 article Humane Typography in the Digital Age',
			img: '',
			text: '1 article Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what?',
			authorImg: null,
			authorName: 'AuthorNAme',
			date: '4 july',
			readingTime: '4 min',
			views: '1',
			id: '1',
		},
		{
			tag: '2 article Society',
			title: '2 article Johannes Gutenberg: The Birth of Movable Humane Typography',
			img: '',
			text: '2 article Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what?',
			authorImg: null,
			authorName: 'AuthorNAme test',
			date: '4 july test',
			readingTime: '4 min test',
			views: '1',
			id: '2',
		},
		{
			tag: '3 article Typography',
			title: '3 article Perfecting the Art of Perfection',
			img: '',
			text: '3 article Human beings aren’t perfect. Perfection is something that will always elude us. There will always be a small part of humanity in everything we do. No matter how small that part, we should make sure that it transcends the limits of the medium. We have to think about the message first. What typeface should we use and why? Does the typeface match the message and what?',
			authorImg: null,
			authorName: 'AuthorNAme test',
			date: '4 july test',
			readingTime: '4 min test',
			views: '1',
			id: '3',
		},
	])

	useEffect(() => {
		!localStorage.getItem('articles')
			? localStorage.setItem('articles', JSON.stringify(articles))
			: setArticles(JSON.parse(localStorage.getItem('articles')))
	}, [])

	const providerValues = {
		currentUser,
		setCurrentUser,
		articles,
		setArticles,
	}

	return (
		<MyContext.Provider value={providerValues}>
			<div className="App">
				<Header/>
				<Main/>
				<Footer/>
			</div>
		</MyContext.Provider>
	);
}

export default App;
