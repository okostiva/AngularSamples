(function () {
    var simpleDirective = function () {
        return {
            // controller, etc
            compile: function (element, attributes) {
                // do some work before the link function works
                return function (scope, element, attributes, controller, transclude) {
                    // implementation
                };
            }
        };
    };

    window.app.directive("simpleDirective", [simpleDirective]);
}());