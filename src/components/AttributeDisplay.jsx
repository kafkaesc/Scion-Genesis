import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

function AttributeDisplay({ attribute, character }) {
	return (
		<Grid2 xs={4}>
			<p>
				<label>{attribute.name}: </label>
				D: {attribute.dots}; E: {attribute.epics}
			</p>
		</Grid2>
	);
}

export default AttributeDisplay;
