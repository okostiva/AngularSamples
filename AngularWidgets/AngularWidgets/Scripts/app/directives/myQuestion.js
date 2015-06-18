(function () {
    var myQuestion = function () {
        return {
            restrict: "E",
            transclude: true,
            templateUrl: "Scripts/app/views/MyQuestion.html",
            scope: {
                questionText: "@q"
            }
        };
    };

    window.app.directive("myQuestion", [myQuestion]);
}());