/**
 * Created by myticPrg on 2015-08-26.
 */

define('Render/BasicRenderer', ['System/BaseObject'], function (BaseObject) {

    var BasicRenderer = BaseObject.extend({
        /**
         * BasicRenderer Constructor
         * @constructor BasicRenderer
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
            json.class = "BasicRenderer";

            return json;
        }
    });

    return BasicRenderer;
});