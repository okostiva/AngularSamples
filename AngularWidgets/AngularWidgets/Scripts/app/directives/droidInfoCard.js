(function () {
    var droidInfoCard = function () {
        return {
            templateUrl: "Scripts/app/views/DroidInfoCard.html",
            restrict: "E",
            scope: {
                droid: "=",
                initialCollapsed: "@collapsed"
            },
            controller: function ($scope) {
                
            }
        }
    };

    window.app.directive("droidInfoCard", [droidInfoCard]);
}());