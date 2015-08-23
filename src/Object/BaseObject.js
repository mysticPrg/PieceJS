/**
 * Created by myticPrg on 2015-08-23.
 */

define('Object/BaseObject', ['Util/SubClass'], function() {
    var BaseObject = Object.subClass({
        init: function(opt) {
            this.opt = opt || {};

            /**
             * @memberof Particle#
             * @var {number} x
             * @desc x position
             */
            this.x = opt && opt.x || 0;

            /**
             * @memberof Particle#
             * @var {number} y
             * @desc y position
             */
            this.y = opt && opt.y || 0;
        },

        toString: function() {
            return 'BaseObject: {x: ' + this.x + ', y: ' + this.y + '}';
        }
    });

    return BaseObject;
});