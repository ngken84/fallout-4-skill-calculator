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


 var Perk = function(n, a, l) {
 	var self = this;
 	self.name = n;
 	self.specialStat = a;

 	self.levelList = [];
 	$.each(l, function(i, val) {
 		self.levelList.push(new PerkLevel(i + 1, val.desc, val.req));
 	});
 }

 var CharacterPerk = function(l) {
 	var self = this;

 	self.level = l;
 	self.perkLevel = ko.observable(0);
 	self.perk = ko.observable();
 }