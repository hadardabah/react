import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Cars />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header>Header</header>
	);
}

function Cars() {
	return (
		<main>
			Cars
		</main>
	);
}

function Footer() {
	return (
		<footer>Footer</footer>
	);
}

export default App;
