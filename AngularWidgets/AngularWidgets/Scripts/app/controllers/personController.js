(function () {
    var PersonController = function ($scope, $routeParams, githubService) {
        // Private
        var onError = function (reason) {
            $scope.error = "An error occurred.";
        };

        var onRespositoryComplete = function (data) {
            $scope.repos = data;
        };

        var onUserComplete = function (data) {
            $scope.person = data;
            githubService.GetRepos(data).then(onRespositoryComplete, onError);
        };
        
        // Public
        $scope.login = $routeParams.login;
        $scope.repoSortOrder = '-stargazers_count';
        githubService.GetPerson($scope.login).then(onUserComplete, onError);
    };

    window.app.controller("PersonController", ["$scope", "$routeParams", "githubService", PersonController]);
})();
