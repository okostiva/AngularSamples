(function () {
    var KnightConfirmationController = function ($scope, $modalInstance, user) {
        $scope.user = user;

        var no = function () {
            $modalInstance.close(false);
        };

        var yes = function () {
            $modalInstance.close(true);
        };

        $scope.No = no;
        $scope.Yes = yes;
    };

    window.app.controller("KnightConfirmationController", ["$scope", "$modalInstance", "user", KnightConfirmationController]);
}());