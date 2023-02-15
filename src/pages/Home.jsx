import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';

function Home() {
	return (
		<div className="content-column">
			<Typography variant="h2" variantMapping="h2">
				Home
			</Typography>
			<Typography variant="body1" variantMapping="p">
				The Scion character builder.
			</Typography>
			<Typography variant="body1" variantMapping="p">
				<Link to="/About">About</Link>
				{' — '}
				<Link to="/Character">Character</Link>
				{' — '}
				<Link to="/CharacterEditor">CharacterEditor</Link>
				{' — '}
				<Link to="/Instructions">Instructions</Link>
			</Typography>
		</div>
	);
}

export default Home;
