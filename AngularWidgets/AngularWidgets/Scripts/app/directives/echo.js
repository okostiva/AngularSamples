(function () {
    var echo = function () {
        return {
            restrict: "A",
            priority: 900,
            link: function () {
                console.log("echo");
            }
        };
    }

    window.app.directive("echo", [echo]);
}());