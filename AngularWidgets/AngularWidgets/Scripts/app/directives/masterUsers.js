(function () {
    var masterUsers = function (userListStateService) {
        return {
            restrict: "E",
            scope: {
                users: "=data"
            },
            templateUrl: "Scripts/app/views/MasterUsers.html",
            controller: function ($scope) {
                $scope.state = userListStateService;
                userListStateService.selectedUser = $scope.users[0];
            }
        };
    };

    window.app.directive("masterUsers", ["userListStateService", masterUsers]);
}());