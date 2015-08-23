/**
 * Created by myticPrg on 2015-08-24.
 */

define('Object/Particle', ['Object/BaseObject'], function (BaseObject) {

    var HALF_PI = 360 * Math.PI / 180;

    var Particle = BaseObject.subClass({
        /**
         * Particle Constructor
         * @constructor Particle
         * @param {number} x - x position
         * @param {number} y - y position
         * @param {number} size - size
         */
        init: function (x, y, size) {
            this._super({
                x: x,
                y: y
            });

            /**
             * @memberof Particle#
             * @var {number} size
             */
            this.size = size || 10;
        },

        /**
         * draw a particle
         * @memberof Particle#
         * @function draw
         * @param {context} context - context of canvas
         */
        draw: function(context) {
            context.moveTo(this.x + this.size, this.y);
            context.arc(this.x, this.y, this.size, 0, HALF_PI);
        }
    });

    return Particle;
});