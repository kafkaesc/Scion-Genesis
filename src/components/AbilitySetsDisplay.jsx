import AbilitySetDisplay from './AbilitySetDisplay';

function AbilitySetsDisplay({ character }) {
	const setMap = new Map();
	for (const key in character.abilities) {
		const ability = character.abilities[key];
		const setName = ability.set;
		if (setMap.has(setName)) {
			setMap.set(setName, [...setMap.get(setName), ability]);
		} else {
			setMap.set(setName, [ability]);
		}
	}

	const setList = [];
	setMap.forEach((set, key) =>
		setList.push(<AbilitySetDisplay abilitySet={set} key={key} name={key} />)
	);

	return <>{setList.map((set) => set)}</>;
}

export default AbilitySetsDisplay;
