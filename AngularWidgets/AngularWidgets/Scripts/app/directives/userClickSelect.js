(function () {
    var userClickSelect = function () {
        return {
            link: function (scope, element, attributes) {
                element.on("click", function () {
                    scope.user.selected = !scope.user.selected;
                    scope.$apply();
                });
            }
        };
    };

    window.app.directive("userClickSelect", [userClickSelect]);
}());