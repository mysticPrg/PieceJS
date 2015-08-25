/**
 * Created by myticPrg on 2015-08-24.
 */

define(['Object/BaseObject'], function(BaseObject) {

    describe("BaseObject", function() {

        it("should be create by constructor", function() {
            var bo = new BaseObject();
            expect(bo instanceof BaseObject).toBeTruthy();
        });

        it("should be able to transform string", function() {
            var bo = new BaseObject({x: 10, y: 20});
            expect(bo.toString()).toBe('BaseObject: {x: 10, y: 20}');
        });

        it("should be able to extend", function() {
            var SubObject = BaseObject.extend({
                init: function(opt) {
                    this._super(opt);
                }
            })

            var so = new SubObject({x: 20, y: 10});
            expect(so instanceof SubObject).toBeTruthy();
            expect(so instanceof BaseObject).toBeTruthy();
            expect(so.toString()).toBe('BaseObject: {x: 20, y: 10}');
        });

    });

});