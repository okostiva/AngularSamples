(function () {
    var tabstrip = function () {
        return {
            restrict: "E",
            transclude: true,
            scope: {

            },
            controller: function($scope) {
                $scope.panes = [];
                this.AddPane = function (pane) {
                    $scope.panes.push(pane);
                    if ($scope.panes.length === 1) {
                        pane.selected = true;
                    }
                }

                $scope.Select = function (pane) {
                    pane.selected = true;
                    $scope.panes.forEach(function (currentPane) {
                        if (currentPane !== pane) {
                            currentPane.selected = false;
                        }
                    });
                }
            },
            templateUrl: "Scripts/app/views/Tabstrip.html"
        };
    };

    window.app.directive("tabstrip", [tabstrip]);
}());