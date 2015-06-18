(function () {
    var eventPause = function ($parse) {
        return {
            restrict: "A",
            link: function (scope, element, attributes) {
                var pauseFunction = $parse(attributes["eventPause"]);

                element.on("pause", function (event) {
                    scope.$apply(function () {
                        pauseFunction(scope, { event: event });
                    });
                });
            }
        };
    };

    window.app.directive("eventPause", ["$parse", eventPause]);
}());