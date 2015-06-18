(function () {
    var ModalController = function ($scope) {
        $scope.Close = function (response) {
            $scope.CloseModal(response);
        };
    };

    window.app.controller("ModalController", ["$scope", ModalController]);
}());