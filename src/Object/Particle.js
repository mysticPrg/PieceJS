/**
 * Created by myticPrg on 2015-08-24.
 */

define('Object/Particle', ['System/BaseObject'], function (BaseObject) {

    var HALF_PI = 360 * Math.PI / 180;

    var Particle = BaseObject.extend({
        /**
         * Particle Constructor
         * @constructor Particle
         * @param {number} x - x position
         * @param {number} y - y position
         * @param {number} size - size
         */
        init: function (x, y, size) {
            this._super();

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
        },

        /**
         * draw a particle
         * @memberof Particle#
         * @function draw
         * @param {context} context - context of canvas
         */
        draw: function(context) {
            if ( context && context.moveTo && context.arc ) {
                context.moveTo(this.x + this.size, this.y);
                context.arc(this.x, this.y, this.size, 0, HALF_PI);
            }
        },

        toJson: function() {
            var json = this._super();
            json.x = this.x;
            json.y = this.y;
            json.size = this.size;
            json.class = "Particle";

            return json;
        }
    });

    return Particle;
});