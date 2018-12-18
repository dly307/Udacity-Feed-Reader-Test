$(function() {
    /*
     * Test #1:  Ensures that all of the feeds shown on the 
     * html have URLs and are defined and working properly.
     */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // All URLs are defined from the allFeeds
        it('url defined', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        // All URLs have a name
        it('name defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        })
    });


    /* 
     * Test #2:  Guarantees that the hamburger menu element of the website 
     * toggles on (show) and off (hide) as it should when clicked and clicked 
     * again, respectively.
     */
    describe('The menu', function() {
        // initial setting of the menu is hidden
        it('is hidden', function() {
            const body = document.querySelector('body'); 
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
        // menu toggles on and off when clicked
        it('toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
             
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menu.click();
            expect(body.classList.contains('menu-hidden')).not.toBe(false);
         });
    });

    /* 
     * Test #3:  Certifies that the a new feed is loaded for the initial 
     * entries that are clicked and checks that it completes its work. 
     */
    describe('Initial Entries', function() {
        // Call / Completition of the loadFeed function 
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        // Should be at least one .entry in the .feed
        it('completes work', function() {
            const feed = document.querySelector('.feed .entry');
            expect(feed.children.length > 0).toBe(true); 
        });
    });
    // New feed is selected when clicked
    describe('New Feed Selection', function() {
        var firstFeed; 
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = document.querySelector('.feed').innerHTML; 
                loadFeed(1, function() {
                    done(); 
                });
            });
        });
        // new feed is loaded when selected
        it('content changes', function(done) {
            const secondFeed = document.querySelector('.feed').innerHTML;
            expect(firstFeed).not.toBe(secondFeed); 
            done();  
        }); 
    });
}());
