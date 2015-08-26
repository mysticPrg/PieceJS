/**
 * Created by myticPrg on 2015-08-25.
 */

define('System/Engine', ['System/BaseObject', 'Render/BasicRenderer'], function (BaseObject, BasicRenderer) {

    var Engine = BaseObject.extend({
        init: function (opt) {
            this.opt = opt || {};

            this.logicFPS = opt && opt.logicFPS || 60;
            this.logicLoop = opt && opt.logicLoop || null;
            this.logicLoopId = null;
            this.logicLoopRunning = false;

            this.renderFPS = opt && opt.renderFPS || 60;
            this.renderer = opt && opt.renderer || null;
            this.renderLoopId = null;
            this.renderLoopRunning = false;

            this.particles = opt && opt.particles || [];

            if (opt && opt.start) {
                this.start();
            }
        },

        start: function () {
            if (this.logicLoop && typeof this.logicLoop === 'function') {
                this.logicLoopId = setInterval(this.logicLoop, this.logicFPS / 1000);
                this.logicLoopRunning = true;
            }

            if ( this.renderer && this.renderer instanceof BasicRenderer ) {
                var renderer = this.renderer;

                this.renderLoopId = setInterval(function() {
                    renderer.drawAll(this.particles);
                }, this.renderFPS / 1000);
                this.renderLoopRunning = true;
            }
        },

        stop: function () {
            if (this.logicLoopRunning && this.logicLoopId) {
                this.logicLoopRunning = false;
                clearInterval(this.logicLoopId);
                this.logicLoopId = null;
            }

            if (this.renderLoopRunning && this.renderLoopId) {
                this.renderLoopRunning = false;
                clearInterval(this.renderLoopId);
                this.renderLoopId = null;
            }
        },

        add: function (obj) {
            if ( this.renderer && this.renderer instanceof BasicRenderer ) {
                this.renderer.add(obj);
            }
        }
    });

    return Engine;
});