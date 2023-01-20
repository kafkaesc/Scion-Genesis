import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="content-column">
			<h2>Home</h2>
			<p>The Scion character builder.</p>
			<p>
				<Link to="/About">About</Link>
				{' — '}
				<Link to="/Character">Character</Link>
				{' — '}
				<Link to="/CharacterEditor">CharacterEditor</Link>
				{' — '}
				<Link to="/Instructions">Instructions</Link>
			</p>
		</div>
	);
}

export default Home;
