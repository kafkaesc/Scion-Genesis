import Typography from '@mui/material/Typography';

function SoakValues({ character }) {
	const stamina = { ...character.attributes.stamina };
	const aggravatedSoak = stamina.epics;
	const bashingSoak = stamina.dots + stamina.epics;
	const lethalSoak = Math.ceil(stamina.dots / 2) + stamina.epics;
	return (
		<Typography variant="body1" variantMapping="p">
			Aggravated: {aggravatedSoak}; Bashing: {bashingSoak}; Lethal: {lethalSoak}
			;
		</Typography>
	);
}

export default SoakValues;
