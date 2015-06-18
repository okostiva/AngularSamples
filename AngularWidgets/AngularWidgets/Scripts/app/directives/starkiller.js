(function () {
    var starkiller = function () {
        return {
            restrict: "AE",
            scope: true,
            require: ["^vader", "^emperor"],
            link: function (scope, element, attributes, controllers) {
                element.data("name", "Starkiller");
                if (controllers[0]) {
                    element.data("master", controllers[0].name);
                    console.log("Starkiller's master is " + controllers[0].name);
                    console.log("Starkiller's master's master is " + controllers[1].name);
                } else {
                    console.log("Starkiller doesn't have a master");
                }

            }
        };
    };

    window.app.directive("starkiller", [starkiller]);
}());