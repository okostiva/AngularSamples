(function () {
    var pane = function () {
        return {
            restrict: "E",
            transclude: true,
            scope: {
                title: "@"
            },
            require: "^tabstrip",
            templateUrl: "Scripts/app/views/Pane.html",
            link: function (scope, element, attributes, tabstripController) {
                tabstripController.AddPane(scope);
            }
        };
    };

    window.app.directive("pane", [pane]);
}());