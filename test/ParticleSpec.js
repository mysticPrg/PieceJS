/**
 * Created by myticPrg on 2015-08-23.
 */

define(['Particle'], function(Particle) {

    describe("Particle", function() {

        it("constructor will be ok", function() {
            var p = new Particle();
            expect(p.size).toBe(10);
        });

        it('draw is function', function() {
            var p = new Particle();
            expect(typeof p.draw).toBe('function');
        });
    });

});