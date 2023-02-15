import { Link, useRouteError } from 'react-router-dom';

import Typography from '@mui/material/Typography';

function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="error-page">
			<div className="content-column text-center">
				<Typography variant="h1" variantMapping="h1">
					Page Not Found
				</Typography>
				<Typography variant="body1" variantMapping="p">
					Hail, adventurer! Looks like you've managed to get yourself lost. Why
					not make your way back <Link to="/Home">Home</Link>.
				</Typography>
			</div>
		</div>
	);
}

export default Error;
