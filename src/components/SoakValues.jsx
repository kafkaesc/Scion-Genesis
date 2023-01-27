function SoakValues({ character }) {
	const stamina = { ...character.attributes.stamina };
	const aggravatedSoak = stamina.epics;
	const bashingSoak = stamina.dots + stamina.epics;
	const lethalSoak = Math.ceil(stamina.dots / 2) + stamina.epics;
	return (
		<p>
			Aggravated: {aggravatedSoak}; Bashing: {bashingSoak}; Lethal: {lethalSoak}
		</p>
	);
}

export default SoakValues;
