//import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbilityDisplay from './AbilityDisplay';

function AbilitySetDisplay({ abilitySet, name }) {
	return (
		<>
			<label>{name}</label>
			<Typography variant="body1" variantMapping="p">
				{abilitySet.map((ability, i, { length }) => (
					<AbilityDisplay
						ability={ability}
						key={name}
						last={i === length - 1}
					/>
				))}
			</Typography>
		</>
	);
}

export default AbilitySetDisplay;
