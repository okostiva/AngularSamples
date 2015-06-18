(function () {
    var spacebarSupport = function () {
        return function (scope, element, attributes) {
            $("body").on("keypress", function (event) {
                var video = element[0];
                if (event.keyCode === 32) {
                    if (video.paused) {
                        video.play();
                    } else {
                        video.pause();
                    }
                }
            });
        };
    };

    window.app.directive("spacebarSupport", [spacebarSupport]);
}());