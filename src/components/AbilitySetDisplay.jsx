import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function AbilitySetDisplay({ abilitySet, name }) {
	return (
		<>
			<label>{name}</label>
			<Typography component="p">
				{abilitySet.map((ability, i, { length }) => (
					<Box display="inline" key={ability.name}>
						<Box
							display="inline"
							sx={ability.isFavored ? { fontStyle: 'italic' } : {}}
						>
							{ability.name}
						</Box>
						{` ${ability.value}`}
						{i < length - 1 ? ', ' : null}
					</Box>
				))}
			</Typography>
		</>
	);
}

export default AbilitySetDisplay;
