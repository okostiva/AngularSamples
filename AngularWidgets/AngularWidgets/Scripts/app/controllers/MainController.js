(function () {
    var MainController = function ($scope, $location) {
        // Public
        $scope.login = "angular";
        $scope.search = function (login) {
            $location.path("/person/" + login);
        };

        $scope.user = {
            name: "Luke Skywalker"
        };
    };

    window.app.controller("MainController", ["$scope", "$location", MainController]);
})();
