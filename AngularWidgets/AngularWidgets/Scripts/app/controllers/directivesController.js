(function () {
    var DirectivesController = function ($scope) {
        $scope.user = {
            name: "Luke Skywalker",
            job: "Jedi",
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
            ],
            hasForce: true,
            yearsOfJediTraining: 4,
            master: "Yoda",
            passedTrials: true,
            masterApproves: true
        };
        $scope.user2 = {
            name: "Han Solo",
            job: "Pilot",
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
        $scope.user3 = {
            name: "Chewbacca",
            job: "Co-pilot",
            selected: false,
            level: 1,
            address: {
                street: "PO Box 123",
                city: "Unknown",
                planet: "Nowhere"
            },
            friends: [
                "Han",
                "Leia",
                "Chewbacca"
            ]
        };

        $scope.users = [];
        $scope.users.push($scope.user);
        $scope.users.push($scope.user2);
        $scope.users.push($scope.user3);

        $scope.messages = [];
        $scope.HandlePause = function (event) {
            console.log(event);
            $scope.messages.push({ text: "paused!" });
            console.log("video was paused!");
        };

        $scope.data = {
            message: "I have not been clicked!"
        };
        $scope.ClickHandler = function (passedData) {
            passedData.message = "I have been clicked";
        };

        $scope.size = 150;

        $scope.message = "Hello Transclusion";
    };

    window.app.controller("DirectivesController", ["$scope", DirectivesController]);
}());