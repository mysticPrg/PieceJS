/**
 * Created by myticPrg on 2015-08-26.
 */

define('Renderer/BaseRenderer', ['System/BaseObject'], function (BaseObject) {

    var BaseRenderer = BaseObject.extend({
        /**
         * BaseRenderer Constructor
         * @constructor BaseRenderer
         */
        init: function() {
            
        },

        drawAll: function (particles) {
        },

        add: function (obj) {
            return obj;
        },

        toJson: function() {
            var json = this._super();
            json.class = "BaseRenderer";

            return json;
        }
    });

    return BaseRenderer;
});