(function () {
    var inheritedTwo = function () {
        return {
            scope: true,
            link: function (scope) {
                console.log("inheritedTwo", scope);
            }
        };
    };

    window.app.directive("inheritedTwo", [inheritedTwo]);
}());