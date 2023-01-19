import { useState } from 'react';

import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import AttributeDisplay from 'components/AttributeDisplay';

const nicolas = require('data/nicolas-steelbeard.json');

function Character() {
	const [character, setCharacter] = useState(nicolas);
	return (
		<div className="content-column">
			<h2>{character.name}</h2>
			<p>Character page (viewing).</p>
			<Grid2 container spacing={1}>
				<AttributeDisplay
					attribute={character.attributes.strength}
					character={character}
				/>
				<AttributeDisplay
					attribute={character.attributes.dexterity}
					character={character}
				/>
				<AttributeDisplay
					attribute={character.attributes.stamina}
					character={character}
				/>
				<AttributeDisplay
					attribute={character.attributes.charisma}
					character={character}
				/>
				<AttributeDisplay
					attribute={character.attributes.manipulation}
					character={character}
				/>
				<AttributeDisplay
					attribute={character.attributes.appearance}
					character={character}
				/>
				<AttributeDisplay
					attribute={character.attributes.perception}
					character={character}
				/>
				<AttributeDisplay
					attribute={character.attributes.intelligence}
					character={character}
				/>
				<AttributeDisplay
					attribute={character.attributes.wits}
					character={character}
				/>
			</Grid2>
		</div>
	);
}

export default Character;
