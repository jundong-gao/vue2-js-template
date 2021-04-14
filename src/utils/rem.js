/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 4/14/21
 * Time: 5:42 PM
 */
(function (win) {
    var dom = document.documentElement || document.body,
        fun = "orientationchange" in window ? "orientationchange" : "resize",
        cb = function () {
            var clientWidth = dom.clientWidth < 800 ? 800 : dom.clientWidth
            dom.style.fontSize = clientWidth / 10 + "px"
        }
    cb()
    win.addEventListener(fun, cb, false)
})(window)
