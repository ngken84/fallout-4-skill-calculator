/* app.js
 *
 * 
 * Feed Reader API to grab RSS feeds as JSON object we can make
 * use of. It also uses the Handlebars templating library and
 * jQuery.
 */

ko.bindingHandlers.starLevel = {
    init: function(element, valueAccessor) {
        $(element).addClass("starLevel");
        for(var i = 0; i < 11; ++i) {
            $('<span>').appendTo(element);
        }
    },

    update: function(element, valueAccessor) {
        var observable = valueAccessor();
        $('span', element).each(function(index) {
            $(this).toggleClass("allocated", index < observable());
        });
    }
};

var FalloutAppModel = function() {
    var self = this;

    self.character = new Character();

    self.strengthPerks = getStrengthPerks();
}

