(function () {
    var emperor = function () {
        var name = "The Emperor";

        return {
            restrict: "E",
            scope: true,
            controller: function () {
                this.name = name;
            },
            link: function (scope, element, attributes) {
                element.data("name", name);
            }
        };
    };

    window.app.directive("emperor", [emperor]);
}());