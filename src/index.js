import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import reportWebVitals from './reportWebVitals';


createRoot (
	document.querySelector('.watch')
).render (
	<React.StrictMode>
		<Router>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</Router>
	</React.StrictMode>
)

// const root = ReactDOM.createRoot(document.getElementById.body);
// root.render(
// 	<Router>
// 		<HelmetProvider>
// 			<React.StrictMode>
// 				<App />
// 			</React.StrictMode>
// 		</HelmetProvider>
// 	</Router>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
