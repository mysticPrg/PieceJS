/**
 * Created by myticPrg on 2015-08-26.
 */

define('Object/GravityPoint', ['Object/Particle'], function (Particle) {

    var GravityPoint = Particle.extend({
        /**
         * GravityPoint Constructor
         * @constructor GravityPoint
         */
        init: function (opt) {
            this._super(opt);
        },

        toJson: function() {
            var json = this._super();
            json.class = "GravityPoint";

            return json;
        }
    });

    return GravityPoint;
});