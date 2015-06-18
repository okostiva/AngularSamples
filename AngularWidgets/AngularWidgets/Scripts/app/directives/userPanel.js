(function () {
    var userPanel = function () {
        return {
            restrict: "E",
            transclude: true,
            templateUrl: "Scripts/app/views/UserPanel.html",
            scope: {
                name: "@",
                level: "=",
                initialCollapsed: "@collapsed"
            },
            controller: function ($scope) {
                var collapse = function () {
                    $scope.collapsed = !$scope.collapsed;
                };

                var nextState = function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    $scope.level++;
                    $scope.level = ($scope.level % 3);
                };

                $scope.collapsed = ($scope.initialCollapsed === "true");
                $scope.Collapse = collapse;
                $scope.NextState = nextState;
            }
        };
    };

    window.app.directive("userPanel", [userPanel]);
}());