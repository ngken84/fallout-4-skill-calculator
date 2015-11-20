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
 	for(var i = 2, x = 75; i <= x; ++i) {
 		self.selectedPerks.push(new CharacterPerk(i));
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