(function () {
    var QuestionnaireController = function ($scope) {
        $scope.answers = { baseLocation: "Yavin 4" };

        $scope.person = {
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
        $scope.person1 = {
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

        $scope.droid = {
            name: "R2-D2",
            level: 1,
            specifications: {
                manufacturer: "Industrial Automation",
                type: "Astromech",
                productLine: "R2 series"
            }
        };
    };

    window.app.controller("QuestionnaireController", ["$scope", QuestionnaireController]);
}());