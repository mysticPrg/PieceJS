/**
 * Created by myticPrg on 2015-08-25.
 */

define('System/Engine', ['System/BaseObject', 'Render/BasicRenderer'], function (BaseObject, BasicRenderer) {

    (function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                        callback(currTime + timeToCall);
                    },
                    timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }

        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
        }
    }());

    var Engine = BaseObject.extend({
        init: function (opt) {
            this.opt = opt || {};

            this.logicFPS = opt && opt.logicFPS || 60;
            this.logicLoop = opt && opt.logicLoop || null;
            this.logicLoopId = null;
            this.logicLoopRunning = false;

            this.renderer = opt && opt.renderer || null;
            this.renderLoopRunning = false;

            this.particles = opt && opt.particles || [];

            if (opt && opt.start) {
                this.start();
            }
        },

        start: function () {
            if (this.logicLoop && typeof this.logicLoop === 'function') {
                this.logicLoopId = setInterval(this.logicLoop, 1000 / this.logicFPS);
                this.logicLoopRunning = true;
            }

            if (this.renderer && this.renderer instanceof BasicRenderer) {
                var renderer = this.renderer;
                var particles = this.particles;
                var _this = this;

                this.renderLoopRunning = true;
                var renderOneFrame = function () {
                    renderer.drawAll(particles);

                    if (_this.renderLoopRunning) {
                        window.requestAnimationFrame(renderOneFrame);
                    }
                };

                window.requestAnimationFrame(renderOneFrame);
            }
        },

        stop: function () {
            if (this.logicLoopRunning && this.logicLoopId) {
                this.logicLoopRunning = false;
                clearInterval(this.logicLoopId);
                this.logicLoopId = null;
            }

            if (this.renderLoopRunning) {
                this.renderLoopRunning = false;
            }
        },

        add: function (obj) {
            if (this.renderer && this.renderer instanceof BasicRenderer) {
                this.renderer.add(obj);
            }
        }
    });

    return Engine;
});