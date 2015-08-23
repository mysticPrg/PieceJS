/**
 * Created by myticPrg on 2015-08-23.
 */

define('PieceJS', ['Particle'], function(Particle) {
    function getRandom(min, max) {
        var range = max - min;
        return Math.round(Math.random() * range) + min;
    }

    return (function (elm, opt) {

        var _this = this;
        this.elm = elm;

        this.width = (opt && opt.width) || 720;
        this.height = (opt && opt.height) || 480;
        this.fps = (opt && opt.fps) || 60;

        this.particles = null;
        this.count = 5000;

        this.foreCanvas = document.createElement('canvas');
        this.foreCanvas.width = this.width;
        this.foreCanvas.height = this.height;
        this.foreContext = this.foreCanvas.getContext('2d');

        this.backCanvas = document.createElement('canvas');
        this.backCanvas.width = this.width;
        this.backCanvas.height = this.height;
        this.backContext = this.backCanvas.getContext('2d');

        this.elm.appendChild(this.foreCanvas);

        this.renderLoop = function () {
            var i;

            _this.backContext.clearRect(0, 0, _this.width, _this.height);
            _this.backContext.beginPath();
            for (i = 0; i < _this.count; i++) {
                _this.particles[i].draw(_this.backContext);
            }
            _this.backContext.closePath();
            _this.backContext.fill();

            _this.foreContext.clearRect(0, 0, _this.width, _this.height);
            _this.foreContext.drawImage(_this.backCanvas, 0, 0);

            window.requestAnimationFrame(_this.renderLoop);
        };

        this.logicLoop = function () {
            var i;

            for (i = 0; i < _this.count; i++) {
                _this.particles[i].x = getRandom(0, _this.width);
                _this.particles[i].y = getRandom(0, _this.height);
            }
        };

        this.createCircles = function () {
            _this.particles = [];
            var i;

            for (i = 0; i < _this.count; i++) {
                _this.particles.push(new Particle(getRandom(0, _this.width), getRandom(0, _this.height), getRandom(1, 1)));
            }
        };

        this.createCircles();
        window.setInterval(this.logicLoop, Math.round(1000 / this.fps));
        window.requestAnimationFrame(this.renderLoop);
    });
});