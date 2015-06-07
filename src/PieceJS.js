/**
 * Created by myticPrg on 2015-06-07.
 */

(function (win, doc) {

    var $ = $ || doc.querySelector.bind(doc);

    var Circle = function (x, y, size) {
        var _this = this,
            HALF_PI = 360 * Math.PI / 180;
        this.x = x || 0;
        this.y = y || 0;
        this.size = size || 10;

        this.draw = function (context) {
            //context.beginPath();

            context.moveTo(_this.x + _this.size, _this.y);
            context.arc(_this.x, _this.y, _this.size, 0, HALF_PI);

            //context.closePath();
            //context.fill();
        };
    };

    var Piece = function (elm, opt) {

        var _this = this;
        this.elm = elm;

        this.width = (opt && opt.width) || 720;
        this.height = (opt && opt.height) || 480;
        this.fps = (opt && opt.fps) || 60;

        this.circles = null;
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
            var i = 0;

            _this.backContext.clearRect(0, 0, _this.width, _this.height);
            _this.backContext.beginPath();
            for (i = 0; i < _this.count; i++) {
                _this.circles[i].draw(_this.backContext);
            }
            _this.backContext.closePath();
            _this.backContext.fill();

            _this.foreContext.clearRect(0, 0, _this.width, _this.height);
            _this.foreContext.drawImage(_this.backCanvas, 0, 0);

            win.requestAnimationFrame(_this.renderLoop);
        };

        this.logicLoop = function () {
            var i = 0;

            for (i = 0; i < _this.count; i++) {
                _this.circles[i].x = getRandom(0, _this.width);
                _this.circles[i].y = getRandom(0, _this.height);
            }
        };

        this.createCircles = function () {
            _this.circles = [];
            var i = 0;

            for (i = 0; i < _this.count; i++) {
                _this.circles.push(new Circle(getRandom(0, _this.width), getRandom(0, _this.height), getRandom(1, 1)));
            }
        };

        this.createCircles();
        win.setInterval(this.logicLoop, Math.round(1000 / this.fps));
        win.requestAnimationFrame(this.renderLoop);
    };

    function getRandom(min, max) {
        var range = max - min;
        return Math.round(Math.random() * range) + min;
    }

    win.Piece = Piece;

})(window, document);