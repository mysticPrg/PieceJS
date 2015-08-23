/**
 * Created by myticPrg on 2015-08-23.
 */

define('Particle', [], function() {

    return (function (x, y, size) {
        var _this = this,
            HALF_PI = 360 * Math.PI / 180;
        this.x = x || 0;
        this.y = y || 0;
        this.size = size || 10;

        this.draw = function (context) {
            //context.beginPath();

            context.moveTo(_this.x + _this.size, _this.y);
            context.arc(_this.x, _this.y, _this.size, 0, HALF_PI);

            //context.closePath();
            //context.fill();
        };
    });

});