import { useState } from 'react';

import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';

import AttributeEditor from 'components/AttributeEditor';
import KnackPicker from 'components/KnackPicker';

const initCharacter = require('data/init-character.json');

function CharacterEditor() {
	const [activeEpicAttribute, setActiveEpicAttribute] = useState(null);
	const [character, setCharacter] = useState(initCharacter);

	function setAttributeDots(attribute) {
		let characterGrowth = { ...character };
		characterGrowth.attributes[attribute.name.toLowerCase()] = attribute;
		setCharacter(characterGrowth);
	}

	function setAttributeEpics(attribute, step) {
		if (step === 'up') {
			setActiveEpicAttribute({ ...attribute, step: step });
		} else if (step === 'down') {
			setActiveEpicAttribute({ ...attribute, step: step });
		}
	}

	// TODO: Load a knack onto the character and update the associated attribute.
	// Implement once there is some data in data/knacks.json.
	function setKnack(knack) {
		console.log('Function not yet implemented.');
	}

	return (
		<div className="content-column">
			<Typography variant="h2" variantMapping="h2">
				{character.name ? character.name : 'New Character'}
			</Typography>
			<Typography variant="body1" variantMapping="p">
				Character page (editing)
			</Typography>
			<Grid2 container spacing={1}>
				<Grid2 xs={12}>
					<Typography variant="h3" variantMapping="h3">
						Attributes
					</Typography>
				</Grid2>
				<AttributeEditor
					attribute={character?.attributes?.strength}
					character={character}
					updateDots={setAttributeDots}
					updateEpics={setAttributeEpics}
				/>
				<AttributeEditor
					attribute={character?.attributes?.dexterity}
					character={character}
					updateDots={setAttributeDots}
					updateEpics={setAttributeEpics}
				/>
				<AttributeEditor
					attribute={character?.attributes?.stamina}
					character={character}
					updateDots={setAttributeDots}
					updateEpics={setAttributeEpics}
				/>
				<Grid2 xs={12}>
					<KnackPicker
						activeEpicAttribute={activeEpicAttribute}
						attribute={character.attributes.strength}
						character={character}
						update={setKnack}
					/>
					<KnackPicker
						activeEpicAttribute={activeEpicAttribute}
						attribute={character.attributes.dexterity}
						character={character}
						update={setKnack}
					/>
					<KnackPicker
						activeEpicAttribute={activeEpicAttribute}
						attribute={character.attributes.stamina}
						character={character}
						update={setKnack}
					/>
				</Grid2>
				<AttributeEditor
					attribute={character?.attributes?.charisma}
					character={character}
					updateDots={setAttributeDots}
					updateEpics={setAttributeEpics}
				/>
				<AttributeEditor
					attribute={character?.attributes?.manipulation}
					character={character}
					updateDots={setAttributeDots}
					updateEpics={setAttributeEpics}
				/>
				<AttributeEditor
					attribute={character?.attributes?.appearance}
					character={character}
					updateDots={setAttributeDots}
					updateEpics={setAttributeEpics}
				/>
				<Grid2 xs={12}>
					<KnackPicker
						activeEpicAttribute={activeEpicAttribute}
						attribute={character?.attributes.charisma}
						character={character}
						update={setKnack}
					/>
					<KnackPicker
						activeEpicAttribute={activeEpicAttribute}
						attribute={character?.attributes.manipulation}
						character={character}
						update={setKnack}
					/>
					<KnackPicker
						activeEpicAttribute={activeEpicAttribute}
						attribute={character?.attributes.appearance}
						character={character}
						update={setKnack}
					/>
				</Grid2>
				<AttributeEditor
					attribute={character?.attributes?.perception}
					character={character}
					updateDots={setAttributeDots}
					updateEpics={setAttributeEpics}
				/>
				<AttributeEditor
					attribute={character?.attributes?.intelligence}
					character={character}
					updateDots={setAttributeDots}
					updateEpics={setAttributeEpics}
				/>
				<AttributeEditor
					attribute={character?.attributes?.wits}
					character={character}
					updateDots={setAttributeDots}
					updateEpics={setAttributeEpics}
				/>
				<Grid2 xs={12}>
					<KnackPicker
						activeEpicAttribute={activeEpicAttribute}
						attribute={character?.attributes.perception}
						character={character}
						update={setKnack}
					/>
					<KnackPicker
						activeEpicAttribute={activeEpicAttribute}
						attribute={character?.attributes.intelligence}
						character={character}
						update={setKnack}
					/>
					<KnackPicker
						activeEpicAttribute={activeEpicAttribute}
						attribute={character?.attributes.wits}
						character={character}
						update={setKnack}
					/>
				</Grid2>
				<Grid2 xs={12}>
					<Typography variant="h3" variantMapping="h3">
						Abilities
					</Typography>
				</Grid2>
				<Grid2 xs={12}>
					<Typography variant="h3" variantMapping="h3">
						Knacks
					</Typography>
				</Grid2>
			</Grid2>
		</div>
	);
}

export default CharacterEditor;
