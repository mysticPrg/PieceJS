/**
 * Created by myticPrg on 2015-08-24.
 */

define(['System/BaseObject'], function(BaseObject) {

    describe("BaseObject", function() {

        it("should be create by constructor", function() {
            var bo = new BaseObject();
            expect(bo instanceof BaseObject).toBeTruthy();
        });

        it("should be able to transform json object", function() {
            var opt = {foo: 10, bar: 20};
            var bo = new BaseObject(opt);

            expect(bo.toJson()).toEqual({
                opt: {
                    foo: 10,
                    bar: 20
                },
                class: "BaseObject"
            });
        });

        it("should be able to extend", function() {
            var SubObject = BaseObject.extend({
                toJson: function() {
                    var json = this._super();
                    json.class = "SubObject";

                    return json;
                }
            })

            var opt = {foo: 10, bar: 20};
            var so = new SubObject(opt);
            expect(so instanceof SubObject).toBeTruthy();
            expect(so instanceof BaseObject).toBeTruthy();

            expect(so.toJson()).toEqual({
                opt: opt,
                class: "SubObject"
            });
        });

    });

});