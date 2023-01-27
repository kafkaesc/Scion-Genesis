function DefenseValues({ character, weapon }) {
	const dexterity = character.attributes.dexterity;
	const dodge = character.abilities.dodge;
	const melee = character.abilities.melee;
	const weaponDefense = weapon ? weapon.defense : 0;
	const dodgeDv =
		Math.ceil((dexterity.dots + dodge.value + character.legend) / 2) +
		dexterity.epics;
	const parryDv =
		Math.ceil((dexterity.dots + melee.value + weaponDefense) / 2) +
		dexterity.epics;
	return (
		<p>
			Dodge DV: {dodgeDv}; Parry DV: {parryDv};
		</p>
	);
}

export default DefenseValues;
