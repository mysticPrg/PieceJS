/**
 * Created by myticPrg on 2015-08-24.
 */

define(['Object/BaseObject'], function(BaseObject) {

    describe("BaseObject", function() {

        it("constructor will be ok", function() {
            var p = new BaseObject();
            expect(p.toString()).toBe('BaseObject: {x: 0, y: 0}');
        });

    });

});