/**
 * Created by myticPrg on 2015-08-25.
 */

define(['System/Engine'], function(Engine) {

    describe("Engine", function() {

        it("constructor will be ok", function() {
            var e = new Engine();

            expect(e instanceof Engine).toBeTruthy();
            expect(e.isRunning).toBeFalsy();
        });

        it('auto start with "start" argument', function() {
            var e = new Engine({
                start: true
            });

            expect(e.isRunning).toBeTruthy();
        });
    });

});