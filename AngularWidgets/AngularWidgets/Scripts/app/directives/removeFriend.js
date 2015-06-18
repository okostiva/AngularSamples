(function () {
    var removeFriend = function () {
        return {
            restrict: "E",
            templateUrl: "Scripts/app/views/RemoveFriend.html",
            scope: {
                notifyParent: "&method"
            },
            controller: function ($scope) {
                var cancelRemove = function () {
                    $scope.removing = false;
                };

                var confirmRemove = function () {
                    $scope.notifyParent();
                };

                var startRemove = function () {
                    $scope.removing = true;
                };

                $scope.CancelRemove = cancelRemove;
                $scope.ConfirmRemove = confirmRemove;
                $scope.RemoveFriend = removeFriend;
                $scope.removing = false;
                $scope.StartRemove = startRemove;
            }
        };
    };

    window.app.directive("removeFriend", [removeFriend]);
}());