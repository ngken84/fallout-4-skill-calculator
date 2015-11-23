/* perk.js
 *
 * Defines a perk
 *
 */


var PerkLevel = function(l, d, r) {
	var self = this;
	self.description = d;
	self.level = l;
	self.requirement = r;
	self.selected = ko.observable(false);
}


 var Perk = function(n, a, req, l) {
 	var self = this;
 	self.name = n;
 	self.specialStat = a;
 	self.specialLvl = req;
 	self.levelList = [];
 	$.each(l, function(i, val) {
 		self.levelList.push(new PerkLevel(i + 1, val.desc, val.req));
 	});
 }

 var CharacterPerk = function(l, m, lock) {
 	var self = this;

 	self.level = l;
 	self.locked = false;
 	self.message = ko.observable();
 	self.statBoost = ko.observable();
 	self.perkLevel = ko.observable(0);
 	self.perk = ko.observable();
 }

