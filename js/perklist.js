function getStrengthPerks() {
	var strengthPerks = [];

	strengthPerks.push(new Perk('Iron Fist', 'strength', 1, [
		{
			desc: 'Channel your chi to unleash devastating fury! Punching attacks do 20% more damage to your opponent',
			req: 0
		},
		{
			desc: 'Punching attacks now do 40% more damage and can disarm your opponent',
			req: 9
		},
		{
			desc: "Punching attacks now do 60% more damage. Unarmed Power Attacks have a chance to cripple one of your opponent's limbs.",
			req: 18
		},
		{
			desc: "Punching attacks now do 80% more damage. Unarmed Power Attacks have an increased chance to cripple one of your opponent's limbs.",
			req: 31
		},
		{
			desc: "Punching attacks now do double damage. Criticals in V.A.T.S. will paralyze your opponent.",
			req: 46
		}
	]));

	strengthPerks.push(new Perk('Big Leagues', 'strength', 2, [
		{
			desc: "Swing for the fences! Do 20% more melee weapon damage.",
			req: 0
		},
		{
			desc: "You now do 40% more melee weapon damage and gain a chance to disarm your opponent.",
			req: 7
		}, 
		{
			desc: "You now do 60% more melee weapon damage and gain an increased chance to disarm your opponent.",
			req: 15
		},
		{
			desc: "You now do 80% more melee weapon damage and hit all targets in front of you.",
			req: 27
		},
		{
			desc: "You now do double damage with a melee weapon, and gain a chance to cripple your opponent, or grand slam their head clean off!",
			req: 42
		}
	]));

	strengthPerks.push(new Perk('Armorer', 'strength', 3, [
		{
			desc: "Protect yourself from the dangers of the Wasteland with access to base level and Rank 1 armor mods.",
			req: 0
		}, 
		{
			desc: "You gain access to Rank 2 armor mods",
			req: 13
		}, 
		{
			desc: "You gain access to Rank 3 armor mods",
			req: 25
		},
		{
			desc: "You gain access to Rank 4 armor mods",
			req: 39
		}

	]));

	strengthPerks.push(new Perk('Blacksmith', 'strength', 4, [
		{
			desc: "Fire up the forge and gain access to base level and Rank 1 melee weapon mods.",
			req: 0
		},
		{
			desc: "You gain access to Rank 2 melee weapon mods",
			req: 16
		},
		{
			desc: "You gain access to Rank 3 melee weapon mods",
			req: 29
		}
	]));

	strengthPerks.push(new Perk('Heavy Gunner', 'strength', 5, [
		{	
			desc: "Thanks to practice and conditioning, heavy guns do 20% more damage.",
			req: 0
		},
		{
			desc: "Heavy guns now do 40% more damage, and have improved hip fire accuracy.",
			req: 11
		},
		{
			desc: "Heavy guns now do 60% more damage. Hip fire accuracy is increased even more.",
			req: 21
		}, 
		{
			desc: "Heavy guns now do 80% more damage and have a chance to stagger your opponent.",
			req: 35
		}, 
		{
			desc: "Heavy guns now do double damage.",
			req: 47
		}
	]));

	strengthPerks.push(new Perk('Strong Back', 'strength', 6, [
		{
			desc: "What are you, part pack mule? Gain +25 to carry weight",
			req: 0
		},
		{
			desc: "You now have +50 to carry weight.",
			req: 10
		},
		{
			desc: "When overencumbered, you can use Action Points to run.",
			req: 20
		},
		{
			desc: "When overencumbered, you can fast travel.",
			req: 30
		}
	]));

	strengthPerks.push(new Perk('Steady Aim', 'strength', 7, [
		{	
			desc: "Stay on target! Hip-fire accuracy is improved when firing any gun.",
			req: 0
		},
		{
			desc: "Hip-fire accuracy is improved even more when firing any gun.",
			req: 28
		}
	]));

	strengthPerks.push(new Perk('Basher', 'strength', 8, [
		{	
			desc: "Get up close and personal! Gun bashing does 25% more damage.",
			req: 0
		},
		{
			desc: "Gun bashing now does 50% more damage and possibly cripples your opponent.",
			req: 5
		},
		{
			desc: "Gun bashing now does 75% more damage and has an increased chance to cripple your opponent.",
			req: 14
		},
		{
			desc: "Gun bashing does double damage and has an increased chance to cripple your opponent. It may also inflict a Critical Hit.",
			req: 26
		}
	]));

	strengthPerks.push(new Perk('Rooted', 'strength', 9, [
		{	
			desc: "You're part tree! While standing still, you gain +25 Damage Resistance and your melee and unarmed attacks deal 25% more damage.",
			req: 0
		}, 
		{
			desc: "While standing still, you now gain +50 Damage Resistance and your melee and unarmed attacks deal 50% more damage.",
			req: 22
		},
		{
			desc: "While standing still, you may automatically disarm enemies that use melee weapons against you.",
			req: 43
		}
	]));

	strengthPerks.push(new Perk('Pain Train', 'strength', 10, [
		{
			desc: "Choo Choo! All aboard! While wearing Power Armor,sprinting into enemies hurts and staggers them. (Robots and oversized enemies are immune to the stagger.)",
			req: 0
		}, 
		{
			desc: "Sprinting into enemies while wearing Power Armor now causes severe damage and a more powerful stagger. (Robots and oversized enemies are immune to the stagger.)",
			req: 24
		},
		{
			desc: "Sprinting into enemies while wearing Power Armor now causes massive damage and knocks them down. Impact landing near enemies inflicts even more damage.",
			req: 50
		}
	]));

	return strengthPerks;
}

