(function () {
    var fontScale = function () {
        return {
            restrict: "A",
            link: function (scope, element, attributes) {
                scope.$watch(attributes["fontScale"], function (newValue, oldValue) {
                    element.css("font-size", newValue + "%");
                });
            }
        };
    };

    window.app.directive("fontScale", [fontScale]);
}());