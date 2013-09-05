module.exports = function (srcArray, img, opts) {
    opts || (opts = {});
    var loop = !(opts.loop === false);
    var duration = opts.duration || (srcArray.length * 100);
    var delay = duration / srcArray.length;
    var length = srcArray.length;
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
    var floor = Math.floor;
    var start;

    function step(timestamp) {
        if (!start) start = timestamp;
        var diff = floor(timestamp - start);
        var frame = floor(length * (diff / duration));
        var item = srcArray[frame];
        if (item && diff < duration) {
            requestAnimationFrame(step);
            img.src = item;
        } else {
            if (loop) {
                start = timestamp;
                requestAnimationFrame(step);
            }
        }
    }

    requestAnimationFrame(step);
};
