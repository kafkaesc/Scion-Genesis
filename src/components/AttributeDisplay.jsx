import DotIcon from '@mui/icons-material/RadioButtonUnchecked';
import EpicIcon from '@mui/icons-material/Close';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';

function AttributeDisplay({ attribute, character }) {
	return (
		<Grid2 xs={4}>
			<Typography variant="body1" variantMapping="p">
				<label>{attribute.name}: </label>
				{[...Array(attribute.dots)].map((val, i) => (
					<DotIcon
						className="valign-middle"
						key={`${attribute.abbr}-${i}`}
						fontSize="small"
					/>
				))}{' '}
				{[...Array(attribute.epics)].map((val, i) => (
					<EpicIcon
						className="valign-middle"
						key={`${attribute.abbr}-E-${i}`}
						fontSize="small"
					/>
				))}
			</Typography>
		</Grid2>
	);
}

export default AttributeDisplay;
