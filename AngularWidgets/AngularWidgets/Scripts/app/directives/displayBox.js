(function () {
    var displayBox = function () {
        return {
            restrict: "E",
            templateUrl: "Scripts/app/views/DisplayBox.html",
            scope: true,
            controller: function ($scope) {
                $scope.hidden = false;
                $scope.Close = function () {
                    $scope.hidden = true;
                };
                $scope.message = "I'm hijacking you";
            },
            transclude: true
        };
    };

    window.app.directive("displayBox", [displayBox]);
}());