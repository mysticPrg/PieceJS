/**
 * Created by myticPrg on 2015-08-25.
 */

define('System/Engine', [], function () {

    var Engine = function (opt) {
        this.opt = opt || {};
        this.logicLoop = opt && opt.logicLoop || null;
        this.renderLoop = opt && opt.renderLoop || null;

        if (opt && opt.start) {
            this.start();
        }
    };

    Engine.prototype.start = function() {
        this.isRunning = true;
    };

    Engine.prototype.stop = function() {
        this.isRunning = false;
    };

    Engine.prototype.pause = function() {
        this.isRunning = false;
    };

    Engine.prototype.add = function(obj) {
        return obj;
    };

    return Engine;
});