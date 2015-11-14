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

 	self.upgradeFromFreePoints = function(stat, amount) {
 		if(stat) {
 			stat(stat() + 1);
 			return true;
 		}
 		return false;
 	};

 }