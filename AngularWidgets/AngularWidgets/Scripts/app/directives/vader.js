(function () {
    var vader = function () {
        var name = "Vader";

        return {
            restrict: "E",
            scope: true,
            require: "^emperor",
            controller: function () {
                this.name = name;
            },
            link: function (scope, element, attributes, emperorController) {
                element.data("name", name);
                element.data("master", emperorController.name);
                console.log("Vader's master is " + emperorController.name);
            }
        };
    };

    window.app.directive("vader", [vader]);
}());