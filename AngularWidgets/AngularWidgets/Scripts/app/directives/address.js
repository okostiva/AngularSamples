(function () {
    var address = function () {
        return {
            restrict: "E",
            templateUrl: "Scripts/app/views/Address.html",
            scope: true,
            controller: function ($scope) {
                $scope.collapsed = false;

                var collapseAddress = function () {
                    $scope.collapsed = true;
                };

                var expandAddress = function () {
                    $scope.collapsed = false;
                };

                $scope.CollapseAddress = collapseAddress;
                $scope.ExpandAddress = expandAddress;
            }
        }
    };

    window.app.directive("address", [address]);
}());