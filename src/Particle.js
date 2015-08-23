/**
 * @file Particle.js.
 * @author mysticPrg<mysticPrg@gmail.com>
 */

define('Particle', [], function() {

    /**
     * @constant HALF_PI
     * @type {number}
     * @default
     */
    var HALF_PI = 360 * Math.PI / 180;

    /**
     * Particle Constructor
     * @constructor Particle
     * @param {number} x - x position
     * @param {number} y - y position
     * @param {number} size - size
     */
    return (function (x, y, size) {
        /**
         * @memberof Particle#
         * @var {number} x
         * @desc x position
         */
        this.x = x || 0;
        /**
         * @memberof Particle#
         * @var {number} y
         * @desc y position
         */
        this.y = y || 0;

        /**
         * @memberof Particle#
         * @var {number} size
         */
        this.size = size || 10;

        /**
         * draw a particle
         * @memberof Particle#
         * @function draw
         * @param {context} context - context of canvas
         */
        this.draw = function (context) {
            context.moveTo(this.x + this.size, this.y);
            context.arc(this.x, this.y, this.size, 0, HALF_PI);
        };
    });

});
