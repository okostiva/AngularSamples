(function () {
    var myTransclude = function () {
        return {
            restrict: "A",
            transclude: "element",
            link: function (scope, element, attributes, controller, transclude) {
                transclude(scope, function (clone) {
                    element.after(clone);
                });
            }
        };
    };

    window.app.directive("myTransclude", [myTransclude]);
}());