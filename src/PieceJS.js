/**
 * Created by myticPrg on 2015-08-23.
 */

define('PieceJS', [
    'Object/Particle',
    'System/Engine',
    'Render/BasicRenderer'
], function(Particle, Engine, BasicRenderer) {
    function getRandom(min, max) {
        var range = max - min;
        return Math.round(Math.random() * range) + min;
    }

    return (function (elm, opt) {

        var width = (opt && opt.width) || 720,
            height = (opt && opt.height) || 480,

            particles = null,
            count = 500,

            foreCanvas = document.createElement('canvas'),
            backCanvas = document.createElement('canvas'),

            foreContext = foreCanvas.getContext('2d'),
            backContext = backCanvas.getContext('2d');

        foreCanvas.width = width;
        foreCanvas.height = height;

        backCanvas.width = width;
        backCanvas.height = height;

        elm.appendChild(foreCanvas);

        var renderer = new BasicRenderer();
        renderer.drawAll = function() {
            var i;

            backContext.clearRect(0, 0, width, height);
            backContext.beginPath();
            for (i = 0; i < count; i++) {
                particles[i].draw(backContext);
            }
            backContext.closePath();
            backContext.fill();

            foreContext.clearRect(0, 0, width, height);
            foreContext.drawImage(backCanvas, 0, 0);
        };

        var logicLoop = function () {
            var i;

            for (i = 0; i < count; i++) {
                particles[i].x = getRandom(0, width);
                particles[i].y = getRandom(0, height);
            }
        };

        (function () {
            particles = [];
            var i;

            for (i = 0; i < count; i++) {
                particles.push(new Particle(getRandom(0, width), getRandom(0, height), getRandom(1, 1)));
            }
        })();

        var e = new Engine({
            start: true,
            logicLoop: logicLoop,
            renderer: renderer
        });

        e.toJson();
    });
});