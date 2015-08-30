/**
 * Created by myticPrg on 2015-08-30.
 */


define(['Renderer/BaseRenderer'], function(BaseRenderer) {

    describe("BaseRenderer", function() {

        it("should be create by constructor", function() {
            var bo = new BaseRenderer();
            expect(bo instanceof BaseRenderer).toBeTruthy();
        });


    });

});