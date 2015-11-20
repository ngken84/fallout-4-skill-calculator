/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('Character Initialization', function() {
        var testChar;

        beforeEach(function() {
            testChar = new Character();
        });

        it('can be defined', function() {
            expect(testChar).toBeDefined();
        });

        it('starts with one on all stats', function() {
            expect(testChar.strength()).toBe(1);
            expect(testChar.perception()).toBe(1);
            expect(testChar.endurance()).toBe(1);
            expect(testChar.intelligence()).toBe(1);
            expect(testChar.charisma()).toBe(1);
            expect(testChar.agility()).toBe(1);
            expect(testChar.luck()).toBe(1);
        });

        it('starts with 22 available points', function() {
            expect(testChar.availablePoints()).toBe(22);
        });

        it('starts with 74 empty character perks', function() {
            $.each(testChar.selectedPerks, function(index, value) {
                expect(value.perkLevel()).toBe(0);
            });
        });
    });

    describe('Character Modification', function() {
        var testChar;

        beforeEach(function() {
            testChar = new Character();
        });

        it('can be upgraded using free points', function() {
            var availablePoints = testChar.availablePoints();
            expect(availablePoints).toBe(22);

            // Strength
            var success = testChar.upgradeFromFreePoints(testChar.strength);
            expect(success).toBe(true);
            expect(testChar.strength()).toBe(2);
            expect(testChar.availablePoints()).toBe(--availablePoints);

            // Perception
            success = testChar.upgradeFromFreePoints(testChar.perception);
            expect(success).toBe(true);
            expect(testChar.perception()).toBe(2);
            expect(testChar.availablePoints()).toBe(--availablePoints);

            // Endurance
            success = testChar.upgradeFromFreePoints(testChar.endurance);
            expect(success).toBe(true);
            expect(testChar.endurance()).toBe(2);
            expect(testChar.availablePoints()).toBe(--availablePoints);

            // Charisma
            success = testChar.upgradeFromFreePoints(testChar.charisma);
            expect(success).toBe(true);
            expect(testChar.charisma()).toBe(2);
            expect(testChar.availablePoints()).toBe(--availablePoints);

            // Intelligence
            success = testChar.upgradeFromFreePoints(testChar.intelligence);
            expect(success).toBe(true);
            expect(testChar.intelligence()).toBe(2);
            expect(testChar.availablePoints()).toBe(--availablePoints);

            // Agility
            success = testChar.upgradeFromFreePoints(testChar.agility);
            expect(success).toBe(true);
            expect(testChar.agility()).toBe(2);
            expect(testChar.availablePoints()).toBe(--availablePoints);

            // Luck
            success = testChar.upgradeFromFreePoints(testChar.luck);
            expect(success).toBe(true);
            expect(testChar.luck()).toBe(2);
            expect(testChar.availablePoints()).toBe(--availablePoints);

        });

        it('can be upgraded using various amounts of free points', function() {
            var availablePoints = testChar.availablePoints();

            // Strength
            var success = testChar.upgradeFromFreePoints(testChar.strength, 2);
            expect(success).toBe(true);
            expect(testChar.strength()).toBe(3);
            availablePoints = availablePoints - 2;
            expect(testChar.availablePoints()).toBe(availablePoints);

            // Perception
            success = testChar.upgradeFromFreePoints(testChar.perception, 2);
            expect(success).toBe(true);
            expect(testChar.perception()).toBe(3);
            availablePoints = availablePoints - 2;
            expect(testChar.availablePoints()).toBe(availablePoints);

            // Endurance
            success = testChar.upgradeFromFreePoints(testChar.endurance, 2);
            expect(success).toBe(true);
            expect(testChar.endurance()).toBe(3);
            availablePoints = availablePoints - 2;
            expect(testChar.availablePoints()).toBe(availablePoints);

            // Charisma
            success = testChar.upgradeFromFreePoints(testChar.charisma, 2);
            expect(success).toBe(true);
            expect(testChar.charisma()).toBe(3);
            availablePoints = availablePoints - 2;
            expect(testChar.availablePoints()).toBe(availablePoints);

            // Intelligence
            success = testChar.upgradeFromFreePoints(testChar.intelligence, 2);
            expect(success).toBe(true);
            expect(testChar.intelligence()).toBe(3);
            availablePoints = availablePoints - 2;
            expect(testChar.availablePoints()).toBe(availablePoints);

            // Agility
            success = testChar.upgradeFromFreePoints(testChar.agility, 2);
            expect(success).toBe(true);
            expect(testChar.agility()).toBe(3);
            availablePoints = availablePoints - 2;
            expect(testChar.availablePoints()).toBe(availablePoints);

            // Luck
            success = testChar.upgradeFromFreePoints(testChar.luck, 2);
            expect(success).toBe(true);
            expect(testChar.luck()).toBe(3);
            availablePoints = availablePoints - 2;
            expect(testChar.availablePoints()).toBe(availablePoints);
        });

        it('can not upgrade using more points than available', function() {
            var test = testChar.upgradeFromFreePoints(testChar.strength, 100);
            expect(test).toBe(false);
        });

        it('can invoke attribute based on a name', function() {
            expect(testChar['strength']()).toBe(1);
        });

    });
    
    describe('Perk Initialization', function() {

        var testPerk;

        beforeEach(function() {
            var perkList = [
                {
                    desc: 'As the rule everyone turns to, you are able to establish supply lines between your workshop settlements', 
                    req: 1
                },
                {
                    desc: 'You can build stores and workstations at workshop settlements.',
                    req: 14
                }
            ];
            testPerk = new Perk('Local Leader', 'charisma', perkList);
        });

        it('can be instantiated', function() {
            
            expect(testPerk).toBeDefined();
        });

        it('has all parameters that make it a perk', function() {
            expect(testPerk.name).toBeDefined();
            expect(testPerk.description).not.toBeDefined();
        });



    });
    

}());
