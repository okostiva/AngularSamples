(function () {
    var userTile = function () {
        return {
            restrict: "E",
            scope: {
                user: "="
            },
            templateUrl: "Scripts/app/views/UserTile.html"
        };
    };

    window.app.directive("userTile", [userTile]);
}());