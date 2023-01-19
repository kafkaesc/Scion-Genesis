import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/About';
import App from './App';
import Character from './pages/Character';
import CharacterEditor from './pages/CharacterEditor';
import Error from './Error';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import reportWebVitals from './reportWebVitals';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/About', element: <About /> },
			{ path: '/Character', element: <Character /> },
			{ path: '/CharacterEditor', element: <CharacterEditor /> },
			{ path: '/Home', element: <Home /> },
			{ path: '/Huh', element: <CharacterEditor /> },
			{ path: '/Instructions', element: <Instructions /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
