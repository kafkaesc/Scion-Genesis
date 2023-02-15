import { Outlet } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import './App.css';
import './Utils.css';

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<Typography variant="h1" variantMapping="h1">
					Scion Genesis
				</Typography>
			</header>
			<div className="main-content">
				<Outlet />
			</div>
		</div>
	);
}

export default App;
