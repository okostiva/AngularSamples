(function () {
    var StructuralDirectivesController = function ($scope) {
        $scope.bountyHunters = [{
            name: "Boba Fett",
            age: 35
        }, {
            name: "IG-88",
            age: 130
        }, {
            name: "Dengar",
            age: 42
        }, {
            name: "Bossk",
            age: 782
        }, {
            name: "Cad Bane",
            age: 51
        }
        ];
        $scope.items = [
            1, 2, 6, 78
        ];
        $scope.people = [
            "Luke",
            "Han",
            "Anakin"
        ];
        $scope.showSubtitle = false;

        $scope.Add = function () {
            $scope.bountyHunters.push({ name: "4LOM", age: 55 });
        };
        $scope.Remove = function () {
            $scope.bountyHunters.length--;
        };
    };

    window.app.controller("StructuralDirectivesController", ["$scope", StructuralDirectivesController]);
}());