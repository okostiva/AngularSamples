(function () {
    var githubService = function ($http) {
        // Private
        var getContributors = function (login, repoName) {
            return $http.get("https://api.github.com/repos/" + login + "/" + repoName + "/contributors")
                        .then(function (response) {
                            return response.data;
                        });
        };

        var getPerson = function (login) {
            return $http.get("https://api.github.com/users/" + login)
                        .then(function (response) {
                            return response.data;
                        });
        };

        var getRepos = function (person) {
            return $http.get(person.repos_url)
                        .then(function (response) {
                            return response.data;
                        });
        };

        var getRepo = function (login, repoName) {
            return $http.get("https://api.github.com/repos/" + login + "/" + repoName)
                        .then(function (response) {
                            return response.data;
                        });
        };

        return {
            GetContributors: getContributors,
            GetPerson: getPerson,
            GetRepo: getRepo,
            GetRepos: getRepos
        };
    }

    window.app.factory("githubService", ["$http", githubService]);
})();