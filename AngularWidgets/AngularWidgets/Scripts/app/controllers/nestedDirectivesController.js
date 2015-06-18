(function () {
    var NestedDirectivesController = function ($scope) {
        $scope.user = {
            name: "Luke Skywalker",
            selected: false,
            level: 0,
            address: {
                street: "PO Box 123",
                city: "Secret Rebel Base",
                planet: "Yarvin 4"
            },
            friends: [
                "Han",
                "Leia",
                "Chewbacca"
            ]
        };
        $scope.user2 = {
            name: "Han Solo",
            selected: false,
            level: 1,
            address: {
                street: "PO Box 123",
                city: "Mos Eisley",
                planet: "Tattoine"
            },
            friends: [
                "Han",
                "Leia",
                "Chewbacca"
            ]
        };
    };

    window.app.controller("NestedDirectivesController", ["$scope", NestedDirectivesController]);
}());