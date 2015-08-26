/**
 * Created by myticPrg on 2015-08-25.
 */

define(['System/Engine', 'Render/BasicRenderer'], function (Engine, BasicRenderer) {

    describe("Engine", function () {

        it("should be create by constructor", function () {
            var e = new Engine();

            expect(e instanceof Engine).toBeTruthy();
            expect(e.logicLoopRunning).toBeFalsy();
        });

        it('should start logic&render loop by "start" argument', function (done) {
            var count = 0;
            var MAX_COUNT = 5;

            var e = new Engine({
                start: true,
                logicLoop: function () {
                    if ( this.logicLoopRunning === false ) {
                        return;
                    }

                    count++;
                    if ( count > MAX_COUNT ) {
                        e.stop();
                        expect(e.logicLoopRunning).toBeFalsy();
                        expect(count).toBe(MAX_COUNT + 1);
                        done();
                    }
                },
                renderer: new BasicRenderer()
            });

            expect(e.logicLoopRunning).toBeTruthy();
        });
    });

});