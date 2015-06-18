(function () {
    var stateDisplay = function () {
        return {
            restrict: "A",
            link: function (scope, element, attributes) {
                var params = attributes["stateDisplay"].split(' ');
                var linkVar = params[0];
                var classes = params.slice(1);

                scope.$watch(linkVar, function (newVal, oldVal) {
                    element.removeClass(classes[oldVal + 1]);
                    element.addClass(classes[newVal + 1]);
                });
            }
        };
    };

    window.app.directive("stateDisplay", [stateDisplay]);
}());