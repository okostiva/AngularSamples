(function () {
    var ModalDirectivesController = function ($scope) {
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

        $scope.CloseModal = function (response) {
            $scope.modalOpen = false;
            console.log("Modal Closed", response);
        }

        $scope.OpenModal = function () {
            $scope.modalOpen = true;
        };

        $scope.ModalClosed = function (response) {
            $scope.CloseModal("no");
        };
    };

    window.app.controller("ModalDirectivesController", ["$scope", ModalDirectivesController]);
}());