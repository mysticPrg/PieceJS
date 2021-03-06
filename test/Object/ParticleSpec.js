/**
 * Created by myticPrg on 2015-08-24.
 */

define(['Object/Particle', 'System/BaseObject'], function(Particle, BaseObject) {

    describe('Particle', function() {

        it('should be create by constructor', function() {
            var p = new Particle();

            expect(p instanceof BaseObject).toBeTruthy();
            expect(p instanceof Particle).toBeTruthy();

            expect(p.x).toBe(0);
            expect(p.y).toBe(0);
            expect(p.size).toBe(10);
        });

        it('draw is function', function() {
            var p = new Particle();

            expect(typeof p.draw).toBe('function');
            expect(p.draw).not.toThrow();
            expect(function() {p.draw();}).not.toThrow();

            var context = {
                moveTo: jasmine.createSpy('moveTo'),
                arc: jasmine.createSpy('arc')
            };
            p.draw(context);
            expect(context.moveTo).toHaveBeenCalledWith(p.x + p.size, p.y);
            expect(context.arc).toHaveBeenCalled();
        });
    });

});
