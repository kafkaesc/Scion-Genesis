import { IconButton } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import IncrementIcon from '@mui/icons-material/AddCircle';
import EpicIcon from '@mui/icons-material/Close';
import DotIcon from '@mui/icons-material/RadioButtonUnchecked';
import DecrementIcon from '@mui/icons-material/RemoveCircle';

function AttributeEditor({ attribute, character, updateDots, updateEpics }) {
	function incrementDots() {
		if (attribute.dots < 5) {
			attribute.dots += 1;
			updateDots(attribute);
		}
	}

	function decrementDots() {
		if (attribute.dots > 1) {
			attribute.dots -= 1;
			updateDots(attribute);
		}
	}

	function incrementEpics() {
		if (attribute.epics < 5) {
			attribute.epics += 1;
			updateEpics(attribute, 'up');
		}
	}

	function decrementEpics() {
		if (attribute.epics > 0) {
			attribute.epics -= 1;
			updateEpics(attribute, 'down');
		}
	}

	return (
		<Grid2 xs={4}>
			<label className={attribute.isFavored ? 'font-style-ital' : null}>
				{attribute.name}
			</label>
			<br />
			<IconButton
				aria-label={`Remove a dot of ${attribute.name}`}
				onClick={decrementDots}
				size="small"
			>
				<DecrementIcon />
			</IconButton>
			{[...Array(attribute.dots)].map((val, i) => (
				<DotIcon
					className="valign-middle"
					key={`${attribute.abbr}-${i}`}
					fontSize="small"
				/>
			))}
			<IconButton
				aria-label={`Add a dot of ${attribute.name}`}
				onClick={incrementDots}
				size="small"
			>
				<IncrementIcon />
			</IconButton>
			<br />
			<IconButton
				aria-label={`Remove an epic of ${attribute.name}`}
				onClick={decrementEpics}
				size="small"
			>
				<DecrementIcon />
			</IconButton>
			{[...Array(attribute.epics)].map((val, i) => (
				<EpicIcon
					className="valign-middle"
					key={`${attribute.abbr}-E-${i}`}
					fontSize="small"
				/>
			))}
			<IconButton
				aria-label={`Add an epic of ${attribute.name}`}
				onClick={incrementEpics}
				size="small"
			>
				<IncrementIcon />
			</IconButton>
		</Grid2>
	);
}

export default AttributeEditor;
