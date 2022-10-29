import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './layout/pages/Home';
import Recommendation from './layout/pages/Recommendation';
import Trend from './layout/pages/Trend';
import Contact from './layout/pages/Contact';
import NotFound from './layout/pages/NotFound';
import './tailwind.css'
import './App.scss';

function App() {
	return (
		<Routes>
			<Route exatc element={ <Home /> }           path="/" />
			<Route exatc element={ <Recommendation /> } path="/recomendaciones" />
			<Route exatc element={ <Trend /> }          path="/tendencias" />
			<Route exatc element={ <Contact /> }        path="/contactenos" />
			<Route exatc element={ <NotFound /> }       path="*" />
		</Routes>
	);
}

export default App;
