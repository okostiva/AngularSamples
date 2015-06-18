(function () {
    var RepoController = function ($scope, $routeParams, githubService) {
        // Private
        var onContributorsComplete = function (data) {
            $scope.contributors = data;
        };

        var onError = function (reason) {
            $scope.error = "An error occurred";
        };

        var onRepoComplete = function (data) {
            $scope.repo = data;
            githubService.GetContributors($scope.login, $scope.repoName)
                .then(onContributorsComplete, onError);
        };

        // Public
        $scope.login = $routeParams.login;
        $scope.repoName = $routeParams.repoName;
        githubService.GetRepo($scope.login, $scope.repoName)
            .then(onRepoComplete, onError);
    };

    window.app.controller("RepoController", ["$scope", "$routeParams", "githubService", RepoController]);
}());