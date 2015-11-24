/* character.js
 *
 * Defines a character
 *
 */

 var Character = function() {
 	var self = this;

 	self.strength = ko.observable(1);
 	self.perception = ko.observable(1);
 	self.endurance = ko.observable(1);
 	self.intelligence = ko.observable(1);
 	self.charisma = ko.observable(1);
 	self.agility = ko.observable(1);
 	self.luck = ko.observable(1);

 	self.availablePoints = ko.observable(22);

 	self.selectedPerks = [];
 	for(var i = 0, x = 75; i <= x; ++i) {
 		if(i < 2) {
 			self.selectedPerks.push(new CharacterPerk(i, 'No Perk', true));
 		} else {
 			self.selectedPerks.push(new CharacterPerk(i, 'No Perk Selected', false));
 		}
 		
 	}

 	self.selectPerk = function(level, perk, perkLevel) {
 		perk.levelList[perkLevel].selected(true);
 		self.selectedPerks[level].perk(perk);
 		self.selectedPerks[level].perkLevel(perkLevel);

 	}

 	self.upgradeFromFreePoints = function(stat, amount) {
 		if(stat) {
 			var value = amount || 1;
 			if(value > self.availablePoints()) {
 				return false;
 			}
			stat(stat() + value);
			self.availablePoints(self.availablePoints() - value);
			return true;
 		}
 		return false;
 	};
 }