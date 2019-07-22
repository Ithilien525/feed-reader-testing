$(function() {
    
    describe('RSS Feeds', function() {
        /* Fist test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });          
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined and not empty', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });          
        });
    });

    describe('The menu', function(){

         /* Test that ensures the menu element is
         * hidden by default. 
         */
        let body = document.body,
            menu = document.querySelector('.menu-icon-link');
        it('is hidden by default', function(){
            expect(body.className).toContain('menu-hidden');
        });
         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. Make sure the menu display when
          * clicked and hide when clicked again.
          */
         it('menu visibility changes on click', function(){
            menu.click();
            expect(body.className).not.toContain('menu-hidden');
            menu.click();
            expect(body.className).toContain('menu-hidden');
         })

    });

    describe('Initial Entries', function(){

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        })

        it('at least one entry is loaded', function(){
            let entry = document.querySelectorAll('.feed .entry');
            expect(entry.length).toBeGreaterThan(0);          
        })
    });

    describe('New Feed Selection', function(){

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                firstFeed = document.querySelector('.feed').innerHTML;
                loadFeed(1, function(){
                    secondFeed = document.querySelector('.feed').innerHTML;
                    done();
                })
            })
        })

        it('load new feeds', function(){
            expect(firstFeed).not.toBe(secondFeed);
        })
    });
}());
