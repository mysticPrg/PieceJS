/**
 * Created by myticPrg on 2015-08-25.
 */

define('System/Engine', ['Util/SubClass'], function () {

    var Engine = Object.subClass({
        init: function (opt) {
            this.opt = opt || {};
            this.logicLoop = opt && opt.logicLoop || null;
            this.renderLoop = opt && opt.renderLoop || null;

            if ( opt && opt.start ) {
                this.start();
            }
        },

        start: function () {
            this.isRunning = true;
        },

        stop: function () {
            this.isRunning = false;
        },

        pause: function () {
            this.isRunning = false;
        },

        add: function (obj) {
            return obj;
        }
    });

    return Engine;
});