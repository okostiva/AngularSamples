(function() {
    var myLazyRender = function () {
        return {
            restrict: "A",
            transclude: "element",
            priority: 1200,
            link: function (scope, element, attributes, controller, transclude) {
                var hasBeenShown = false;
                var unwatchLazyRender = scope.$watch(attributes["myLazyRender"], function (newValue, oldValue) {
                    if (newValue && !hasBeenShown) {
                        hasBeenShown = true;
                        transclude(scope, function (clone) {
                            element.after(clone);
                        });
                        unwatchLazyRender();
                    }
                });
            }
        };
    };

    window.app.directive("myLazyRender", [myLazyRender]);
}());