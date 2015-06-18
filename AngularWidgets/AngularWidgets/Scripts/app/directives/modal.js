(function () {
    var modal = function ($document) {
        return {
            restrict: "E",
            scope: {
                modalOpen: "=open",
                option: "=",
                onClose: "&"
            },
            transclude: true,
            templateUrl: "Scripts/app/views/Modal.html",
            controller: function ($scope) {
                $scope.Close = function () {
                    $scope.modalOpen = false;
                    $scope.onClose();
                };
            },
            link: function (scope, element, attributes) {
                var options = angular.extend({
                    height: "250px",
                    width: "500px",
                    top: "20%",
                    left: "30%",
                }, scope.options);

                element.find(".modal-container").css({
                    left: options.left,
                    top: options.top,
                    height: options.height + "px",
                    width: options.width + "px"
                });

                var pageHeight = $document.height();
                var pageWidth = $document.width();
                element.find(".modal-blackout").css({ 
                    height: pageHeight + "px",
                    width: pageWidth + "px"
                });
            }
        }
    };

    window.app.directive("modal", ["$document", modal]);
}());