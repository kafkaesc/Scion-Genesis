import Box from '@mui/material/Box';

function AbilityDisplay({ ability, last }) {
	return (
		<Box display="inline">
			<Box
				display="inline"
				sx={ability.isFavored ? { fontStyle: 'italic' } : {}}
			>
				{ability.name}
			</Box>{' '}
			{ability.value}
			{!last ? ', ' : null}
		</Box>
	);
}

export default AbilityDisplay;
