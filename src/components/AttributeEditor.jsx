import { IconButton } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function AttributeEditor({ attribute, character, update }) {
	function incrementDots() {
		if (attribute.dots < 5) {
			attribute.dots += 1;
			update(attribute);
		}
	}

	function decrementDots() {
		if (attribute.dots > 1) {
			attribute.dots -= 1;
			update(attribute);
		}
	}

	function incrementEpics() {
		if (attribute.epics < 5) {
			attribute.epics += 1;
			update(attribute);
		}
	}

	function decrementEpics() {
		if (attribute.epics > 0) {
			attribute.epics -= 1;
			update(attribute);
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
				<RemoveCircleIcon />
			</IconButton>
			{[...Array(attribute.dots)].map((val, i) => (
				<RadioButtonUncheckedIcon
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
				<AddCircleIcon />
			</IconButton>
			<br />
			<IconButton
				aria-label={`Remove an epic of ${attribute.name}`}
				onClick={decrementEpics}
				size="small"
			>
				<RemoveCircleIcon />
			</IconButton>
			{[...Array(attribute.epics)].map((val, i) => (
				<CloseIcon
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
				<AddCircleIcon />
			</IconButton>
		</Grid2>
	);
}

export default AttributeEditor;
