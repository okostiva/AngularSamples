(function () {
    var inheritedOne = function () {
        return {
            scope: true,
            link: function (scope) {
                console.log("inheritedOne", scope);
            }
        };
    };

    window.app.directive("inheritedOne", [inheritedOne]);
}());