import Typography from '@mui/material/Typography';

function About() {
	return (
		<div className="content-column">
			<Typography variant="h2" variantMapping="h2">
				About
			</Typography>
			<Typography variant="body1" variantMapping="p">
				About this project.
			</Typography>
			<Typography variant="body1" variantMapping="p" className="text-center">
				Built by Jared Hettinger
			</Typography>
		</div>
	);
}

export default About;
