import Typography from '@mui/material/Typography';

import './KnackPicker.css';

// TODO: Make this collapsed by default and expand out with a nice animation
// when a new epic is picked. There should only be one knack picker visible at
// a time, whether that coordination happens here or in CharacterEditor has yet
// to be decided.
function KnackPicker({ activeEpicAttribute, attribute, character, update }) {
	return (
		<div
			className={
				activeEpicAttribute?.abbr === attribute.abbr
					? 'knack-picker'
					: 'knack-picker--collapsed'
			}
		>
			{activeEpicAttribute?.abbr === attribute.abbr && (
				<Typography variant="body1" variantMapping="p">
					KnackPicker for: {attribute.name}.{' '}
					{activeEpicAttribute.step === 'up'
						? 'Add a knack.'
						: 'Remove a knack.'}
				</Typography>
			)}
		</div>
	);
}

export default KnackPicker;
