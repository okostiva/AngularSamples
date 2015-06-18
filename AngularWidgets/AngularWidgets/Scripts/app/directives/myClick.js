(function () {
    var myClick = function ($parse) {
        return {
            restrict: "A",
            link: function (scope, element, attributes) {
                var clickFunction = $parse(attributes["myClick"]);

                element.on("click", function () {
                    scope.$apply(function () {
                        clickFunction(scope);
                    });
                });
            }
        };
    };

    window.app.directive("myClick", ["$parse", myClick]);
}());