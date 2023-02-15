import Typography from '@mui/material/Typography';

function Instructions() {
	return (
		<div className="content-column">
			<Typography variant="h2" variantMapping="h2">
				Instructions
			</Typography>
			<Typography variant="body1" variantMapping="p">
				How to use this app.
			</Typography>
		</div>
	);
}

export default Instructions;
