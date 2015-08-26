/**
 * Created by myticPrg on 2015-08-25.
 */

define('System/Engine', ['System/BaseObject'], function (BaseObject) {

    var Engine = BaseObject.extend({
        init: function (opt) {
            this.opt = opt || {};

            this.logicFPS = opt && opt.logicFPS || 60;
            this.logicLoop = opt && opt.logicLoop || null;
            this.logicLoopId = null;

            this.renderFPS = opt && opt.renderFPS || 60;
            this.renderLoop = opt && opt.renderLoop || null;

            if (opt && opt.start) {
                this.start();
            }
        },

        start: function () {
            if (this.logicLoop && typeof this.logicLoop === 'function') {
                this.logicLoopId = setInterval(this.logicLoop, 60 / 1000);
                this.isRunning = true;
            }
        },

        stop: function () {
            if (this.isRunning && this.logicLoopId) {
                this.isRunning = false;
                clearInterval(this.logicLoopId);
                this.logicLoopId = null;
            }
        },

        add: function (obj) {
            return obj;
        }
    });

    return Engine;
});