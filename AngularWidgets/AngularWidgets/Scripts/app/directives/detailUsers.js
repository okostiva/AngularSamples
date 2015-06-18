(function () {
    var detailUsers = function (userListStateService) {
        return {
            restrict: "E",
            scope: {
                users: "=data"
            },
            templateUrl: "Scripts/app/views/DetailUsers.html",
            controller: function ($scope) {
                $scope.state = userListStateService;
            }
        };
    };

    window.app.directive("detailUsers", ["userListStateService", detailUsers]);
}());