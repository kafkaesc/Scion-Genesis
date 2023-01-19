import { Link, useRouteError } from 'react-router-dom';

function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="error-page">
			<div className="content-column text-center">
				<h1>Page Not Found</h1>
				<p>
					Hail, adventurer! Looks like you've managed to get yourself lost. Why
					not make your way back <Link to="/Home">Home</Link>.
				</p>
			</div>
		</div>
	);
}

export default Error;
