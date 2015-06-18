(function () {
    var personInfoCard = function () {
        return {
            templateUrl: "Scripts/app/views/PersonInfoCard.html",
            restrict: "E",
            scope: {
                person: "=",
                initialCollapsed: "@collapsed"
            },
            controller: function ($scope) {
                var knightMe = function (person) {
                    person.rank = "Knight";
                };

                var removeFriend = function (friend) {
                    var index = $scope.person.friends.indexOf(friend);
                    if (index > -1) {
                        $scope.person.friends.splice(index, 1);
                    }
                };
                
                $scope.KnightMe = knightMe;
                $scope.RemoveFriend = removeFriend;
            }
        }
    };

    window.app.directive("personInfoCard", [personInfoCard]);
}());