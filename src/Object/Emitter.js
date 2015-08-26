/**
 * Created by myticPrg on 2015-08-26.
 */

define('Object/Emitter', ['Object/Particle'], function (Particle) {

    var Emitter = Particle.extend({
        /**
         * Emitter Constructor
         * @constructor Emitter
         */
        init: function (opt) {
            this._super(opt);
        },

        toJson: function() {
            var json = this._super();
            json.class = "Emitter";

            return json;
        }
    });

    return Emitter;
});