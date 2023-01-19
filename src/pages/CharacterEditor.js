import { useState } from 'react';

import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import AttributeEditor from 'components/AttributeEditor';

const initCharacter = require('data/init-character.json');

function CharacterEditor() {
	const [character, setCharacter] = useState(initCharacter);

	function setAttribute(attribute) {
		let characterGrowth = { ...character };
		characterGrowth.attributes[attribute.name.toLowerCase()] = attribute;
		setCharacter(characterGrowth);
	}

	return (
		<div className="content-column">
			<h2>{character.name ? character.name : 'New Character'}</h2>
			<p>Character page (editing).</p>
			<Grid2 container spacing={1}>
				<Grid2 xs={12}>
					<h3>Attributes</h3>
				</Grid2>
				<AttributeEditor
					attribute={character?.attributes?.strength}
					character={character}
					update={setAttribute}
				/>
				<AttributeEditor
					attribute={character?.attributes?.dexterity}
					character={character}
					update={setAttribute}
				/>
				<AttributeEditor
					attribute={character?.attributes?.stamina}
					character={character}
					update={setAttribute}
				/>
				<AttributeEditor
					attribute={character?.attributes?.charisma}
					character={character}
					update={setAttribute}
				/>
				<AttributeEditor
					attribute={character?.attributes?.manipulation}
					character={character}
					update={setAttribute}
				/>
				<AttributeEditor
					attribute={character?.attributes?.appearance}
					character={character}
					update={setAttribute}
				/>
				<AttributeEditor
					attribute={character?.attributes?.perception}
					character={character}
					update={setAttribute}
				/>
				<AttributeEditor
					attribute={character?.attributes?.intelligence}
					character={character}
					update={setAttribute}
				/>
				<AttributeEditor
					attribute={character?.attributes?.wits}
					character={character}
					update={setAttribute}
				/>
				<Grid2 xs={12}>
					<h3>Abilities</h3>
				</Grid2>
				<Grid2 xs={12}>
					<h3>Knacks</h3>
				</Grid2>
			</Grid2>
		</div>
	);
}

export default CharacterEditor;
