/**
 * Created by myticPrg on 2015-08-25.
 */

define(['System/Engine'], function (Engine) {

    describe("Engine", function () {

        it("should be create by constructor", function () {
            var e = new Engine();

            expect(e instanceof Engine).toBeTruthy();
            expect(e.isRunning).toBeFalsy();
        });

        it('should start logic loop by "start" argument', function (done) {
            var count = 0;
            var MAX_COUNT = 5;

            var e = new Engine({
                start: true,
                logicLoop: function () {
                    if ( this.isRunning === false ) {
                        return;
                    }

                    count++;
                    if ( count > MAX_COUNT ) {
                        e.stop();
                        expect(e.isRunning).toBeFalsy();
                        expect(count).toBe(MAX_COUNT + 1);
                        done();
                    }
                }
            });

            expect(e.isRunning).toBeTruthy();
        });
    });

});