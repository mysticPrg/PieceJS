/**
 * Created by myticPrg on 2015-08-30.
 */


define([
    'System/BaseObject',
    'Renderer/BaseRenderer'
], function(
    BaseObject,
    BaseRenderer
) {

    describe('BaseRenderer', function() {

        it('should be create by constructor', function() {
            var br = new BaseRenderer();

            expect(br instanceof BaseRenderer).toBeTruthy();
            expect(br instanceof BaseObject).toBeTruthy();
        });

        it('should be able to draw all particles', function() {

        });
    });

});