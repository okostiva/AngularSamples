(function () {
    var myDirective = function () {
        return {
            restrict: "A",
            scope: {
            }
        };
    };

    window.app.directive("myDirective", [myDirective]);
}());